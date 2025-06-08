import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { createStore, CustomStore } from 'devextreme-aspnet-data-nojquery';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit {
  @ViewChild('dataGrid', { static: false }) dataGrid!: DxDataGridComponent;

  casos: any[] = [];
  user!: User;
  remoteDataSource: any;
  consultoriosDataSource: any;
  selectedFile: File | null = null;

  // Filtros
  selectedCaso: any;
  selectedAbogado: any;
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  busqueda: string = '';

  // Datos de filtros simulados
  caso = [
    { IdCaso: 1, Nombre: 'Caso A' },
    { IdCaso: 2, Nombre: 'Caso B' }
  ];

  abogados = [
    { IdAbogado: 1, Nombre: 'Abogado Pérez' },
    { IdAbogado: 2, Nombre: 'Abogado Gómez' }
  ];

  constructor(
    private config: ConfiguracionService,
    private http: HttpClient
  ) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
  }

  ngOnInit() {
    const serviceUrl: String = this.config.apiUrl + 'Casos';


    this.remoteDataSource = createStore({
      key: 'IdCaso',
      loadUrl: serviceUrl + '/Get?id=1',
      insertUrl: `${serviceUrl}/Post`,
      updateUrl: `${serviceUrl}/Put`,
      deleteUrl: `${serviceUrl}/Delete`,


      onAjaxError: ({ xhr, error }) => {
        if (xhr.status === 401) {
          console.warn('No autorizado. Aquí puedes renovar el token si lo deseas.');
          // Ejemplo de renovación de token comentado
          /*
          this.authService.Gettoken(this.config.Usertoken, this.config.Passtoken).pipe(
            switchMap(res => {
              this.authService.setAccessToken(res);
              return of(res); // Retorna algo válido si necesitas continuar
            })
          ).subscribe();
          */
        }
      }
    });

    // Cargar otros datos
    this.cargarDataSource();
    this.consultarConsultorios();
  }

  consultarConsultorios() {
  this.consultoriosDataSource = new CustomStore({
    key: 'IdCaso',
    load: () => {
      return this.http.get(`${this.config.apiUrl}Casos/Get`)
        .toPromise()
        .then((data: any) => data)
        .catch(error => {
          console.error('Error cargando caso:', error);
          return [];
        });
    }
  });
}


  cargarDataSource() {
    this.remoteDataSource = new CustomStore({
      key: 'IdCliente',
      load: (loadOptions: any) => {
        const params = {
          caso: this.selectedCaso,
          abogado: this.selectedAbogado,
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin,
          texto: this.busqueda,
          skip: loadOptions.skip || 0,
          take: loadOptions.take || 10
        };

        return this.http.post(`${this.config.apiUrl}Clientes/Filtrar`, params)
          .toPromise()
          .then((result: any) => {
            return {
              data: result.data || result,
              totalCount: result.totalCount || result.length || 0
            };
          })
          .catch(error => {
            console.error('Error cargando clientes:', error);
            return { data: [], totalCount: 0 };
          });
      }
    });
  }

  aplicarFiltros() {
    if (this.dataGrid && this.dataGrid.instance) {
      this.dataGrid.instance.refresh();
    }
  }

  onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    // Aquí puedes implementar la lógica del botón de clonar si lo necesitas
  };
}
