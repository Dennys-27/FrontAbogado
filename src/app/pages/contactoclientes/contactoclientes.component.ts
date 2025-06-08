import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { GlobalComponent } from 'src/app/global-component';
import CustomStore from 'devextreme/data/custom_store';
import Swal from 'sweetalert2';
declare var Papa: any;
@Component({
  selector: 'app-contactoclientes',
  templateUrl: './contactoclientes.component.html',
  styleUrls: ['./contactoclientes.component.scss'] // ✅ corregido
})
export class ContactoclientesComponent {
  @ViewChild('dataGrid', { static: false }) dataGrid!: any;
  contactosclientes: any[] = [];
  user!: User;
  remoteDataSource: any;
  selectedFile: File | null = null;
  clientesDataSource: any;

  constructor(private config: ConfiguracionService, private http: HttpClient) {
    const serviceUrl: string = this.config.apiUrl + 'ContactosClientes';
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);

    this.remoteDataSource = createStore({
      key: 'IdContacto',
      loadUrl: serviceUrl + '/Get?id=1',
      insertUrl: serviceUrl + '/Post',
      updateUrl: serviceUrl + '/Put',
      deleteUrl: serviceUrl + '/Delete'
    });
  }

  ngOnInit() {
    this.clientesDataSource = new CustomStore({
      key: 'IdCliente',
      load: () => {
        return this.http.get(`${this.config.apiUrl}Clientes/Get?id=1`)
          .toPromise()
          .then((data: any) => {
            console.log('Clientes cargados:', data);
            return data; // ⚠️ asegúrate de que sea un array plano
          })
          .catch((error: any) => {
            console.error('Error cargando clientes:', error);
            return [];
          });
      }
    });
  }

  onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {};


  // Solo guarda el archivo seleccionado
    onCSVSelected(event: any): void {
      const file = event.target.files[0];
      this.selectedFile = file ? file : null;
    }
  
    // Parsear y enviar cuando el usuario hace click en "Enviar"
    onUpload(): void {
      if (!this.selectedFile) return;
  
      Papa.parse(this.selectedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result: any) => {
          const datos = result.data;
  
          if (!datos || datos.length === 0) {
            console.error('No se encontraron datos en el archivo CSV');
            Swal.fire('Error', 'El archivo CSV está vacío o mal formado.', 'error');
            return;
          }
  
          const contactos = datos.map((item: any) => ({
            idcliente: item['IdCliente'] || item['idCliente'],
            nombre: item['Nombre'] || item['nombre'] || '', // ejemplo: ajusta los campos reales
            cargo: item['Cargo'] || item['Cargo'] || '',
            telefono: item['Telefono'] || item['teléfono'] || '',
            email: item['Email'] || item['Email'], // Asignar estado por defecto
          }));
  
          this.http.post(`${this.config.apiUrl}ContactosClientes/CargarCSV/CargarCSV`, datos)
            .subscribe({
              next: res => {
                Swal.fire('Éxito', 'Datos enviados correctamente.', 'success');
                console.log(res);
  
                this.selectedFile = null;
  
                // Limpiar el input file
                const inputFile = document.getElementById('csvFile') as HTMLInputElement;
                if (inputFile) inputFile.value = '';
  
                // Refrescar el DataGrid
                if (this.dataGrid && this.dataGrid.instance) {
                  this.dataGrid.instance.refresh();
                }
              },
              error: err => {
                console.error('Error al enviar datos', err);
                Swal.fire('Error', 'Error al enviar datos. Revisa la consola.', 'error');
              }
            });
        }
      });
    }
}
