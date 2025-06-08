import { Component, ViewChild } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { User } from 'src/app/core/models/auth.models';
import { GlobalComponent } from 'src/app/global-component';
import { createStore, CustomStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import Swal from 'sweetalert2';
declare var Papa: any;
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  @ViewChild('dataGrid', { static: false }) dataGrid!: any;  // Cambia 'any' por el tipo adecuado si lo conoces
  customers!: any[]; user!: User;
  remoteDataSource: any;
  selectedFile: File | null = null;
  consultoriosDataSource: any;


  constructor(
    private servicios: UsuarioService,
    private config: ConfiguracionService,
    private http: HttpClient
  ) {
    this.servicios.Consultar().subscribe((data: any) => {
      this.customers = data.data
    });
    const serviceUrl: String = this.config.apiUrl + 'Usuarios';
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
      key: 'IdUsuario',
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


 

}
