import { Component, ViewChild } from '@angular/core';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';

import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare var Papa: any;
@Component({
  selector: 'app-consultorios',
  templateUrl: './consultorios.component.html',
  styleUrl: './consultorios.component.scss'
})
export class ConsultoriosComponent {
  @ViewChild('dataGrid', { static: false }) dataGrid!: DxDataGridComponent;
  consultorios: any[] = [];
  remoteDataSource: any;
  selectedFile: File | null = null;

  /**
   *
   */
  constructor(private config: ConfiguracionService, private http: HttpClient) {
    const serviceUrl: String = this.config.apiUrl + 'Consultorios';
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

      /*  loadUrl: serviceUrl + '/Get?id='+this.user.IdConsultorio, */
      key: 'IdConsultorio',
      loadUrl: serviceUrl + '/Get',
      insertUrl: serviceUrl + '/Post',
      updateUrl: serviceUrl + '/Put',
      deleteUrl: serviceUrl + '/Delete'

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

        const consultorios = datos.map((item: any) => ({
          nombre: item['Nombre'] || item['nombre'] || '', // ejemplo: ajusta los campos reales
          direccion: item['Direccion'] || item['dirección'] || '',
          telefono: item['Telefono'] || item['teléfono'] || '',
          estado: item['Estado'] || item['estado'], // Asignar estado por defecto
        }));

        this.http.post(`${this.config.apiUrl}Consultorios/CargarCSV/CargarCSV`, datos)
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