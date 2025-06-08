import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']    // <-- CORRECTO: plural y array
})
export class TareasComponent implements OnInit {
  @ViewChild('dataGrid', { static: false }) dataGrid!: DxDataGridComponent;

  remoteDataSource: any;
  casoDatasource: any;
  usuarioDatasource: any;

  constructor(private config: ConfiguracionService, private http: HttpClient) {
    const serviceUrl = `${this.config.apiUrl}Tareas`;

    this.remoteDataSource = createStore({
      key: 'IdTarea',
      loadUrl: `${serviceUrl}/Get`,
      insertUrl: `${serviceUrl}/Post`,
      updateUrl: `${serviceUrl}/Put`,
      deleteUrl: `${serviceUrl}/Delete`,
      onBeforeSend: (operation, ajaxSettings) => {
        // Si necesitas agregar cabeceras, hazlo aquí
        // ajaxSettings.headers = { Authorization: 'Bearer ' + token };
      },
      onAjaxError: ({ xhr, error }) => {
        console.error('Error en petición Tareas:', error);
      }
    });
  }

  ngOnInit(): void {
    // Carga de Casos
    this.casoDatasource = new CustomStore({
      key: 'IdCaso',
      load: async (): Promise<any[]> => {
        console.log('Iniciando carga de casos…');
        try {
          const data = await this.http
            .get<any[]>(`${this.config.apiUrl}Casos/Get?id=1`)
            .toPromise();
          console.log('Casos recibidos:', data);
          // Garantizamos que devolvemos siempre un array
          return data ?? [];
        } catch (error) {
          console.error('Error cargando casos:', error);
          return [];
        }
      }
    });

    // CargausuarioDatasource de Usuarios
    this.usuarioDatasource = new CustomStore({
      key: 'IdUsuario',
      load: async (): Promise<any[]> => {
        console.log('Iniciando carga de usuarios…');
        try {
          const data = await this.http
            .get<any[]>(`${this.config.apiUrl}Usuarios/Get?id=1`)
            .toPromise();
          console.log('Usuarios recibidos:', data);
          return data ?? [];
        } catch (error) {
          console.error('Error cargando usuarios:', error);
          return [];
        }
      }
    });
  }


  onCloneIconClick(e: DxDataGridTypes.ColumnButtonClickEvent): void {
    const tarea = e.row?.data;
    console.log('Clonar tarea:', tarea);
    // Implementa aquí tu lógica de clonación
  }
}
