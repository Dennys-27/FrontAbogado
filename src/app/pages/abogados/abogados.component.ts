import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { GlobalComponent } from 'src/app/global-component';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import Swal from 'sweetalert2';
import CustomStore from 'devextreme/data/custom_store';

declare var Papa: any;

@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.component.html',
  styleUrl: './abogados.component.scss'
})
export class AbogadosComponent {
  @ViewChild('dataGrid', { static: false }) dataGrid!: any; // Cambia 'any' por el tipo adecuado si lo conoces
  abogados: any[] = []; user!: User; // Cambia 'any' por el tipo adecuado si lo conoces
  remoteDataSource: any;
  selectedFile: File | null = null;
  consultoriosDataSource: any;

  constructor(private config: ConfiguracionService, private http: HttpClient) {
    const serviceUrl: String = this.config.apiUrl + 'Abogados';
    this.user = JSON.parse(
      localStorage.getItem(GlobalComponent.CURRENT_USER)!
    );
    this.remoteDataSource = createStore({
      onBeforeSend: function (operation, ajaxSettings) {
        // ajaxSettings.headers = {
        //     "Authorization": 'Bearer ' + token
        // }
      }, onAjaxError: ({ xhr, error }) => {
        // if(xhr.status == 401) {
        //   this.authService.Gettoken(this.config.Usertoken,this.config.Passtoken).pipe(
        //     switchMap((res)=>{
        //       this.authService.setAccessToken(res);
        //       return "";
        //     })
        //   )
        // }
      },
      key: 'IdAbogado',
      /*  loadUrl: serviceUrl + '/Get?id='+this.user.IdConsultorio, */
      loadUrl: serviceUrl + '/Get?id=1',
      insertUrl: serviceUrl + '/Post',
      updateUrl: serviceUrl + '/Put',
      deleteUrl: serviceUrl + '/Delete'
    });
  }

  ngOnInit() {
    this.consultoriosDataSource = new CustomStore({
      key: 'IdConsultorio',
      load: () => {
        return this.http.get(`${this.config.apiUrl}Consultorios/Get`)
          .toPromise()
          .then((data: any) => data)
          .catch(error => {
            console.error('Error cargando consultorios:', error);
            return [];
          });
      }
    });
  }


  onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {

  };

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

        const abogados = datos.map((item: any) => ({
          nombre: item['Nombre'] || '',
          apellido: item['Apellido'] || '',
          cedula: item['Cedula'] || '',
          email: item['Email'] || '',
          telefono: item['Telefono'] || '',
          especialidad: item['Especialidad'] || '',
          estado: item['Estado'] === '1', 
          idConsultorio: Number(item['IdConsultorio']) || null
        }));

        this.http.post(`${this.config.apiUrl}Abogados/CargarCSV/CargarCSV`, datos)
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
