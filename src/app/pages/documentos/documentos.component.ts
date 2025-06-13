import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.scss'
})
export class DocumentosComponent {
  documentos! : any [];
  remoteDataSource: any;
  constructor(private config: ConfiguracionService ){
      const serviceUrl: String =this.config.apiUrl+  'Documentos';
       
       this.remoteDataSource = createStore({
      onBeforeSend: function(operation, ajaxSettings)
      {
          // ajaxSettings.headers = {
          //     "Authorization": 'Bearer ' + token
          // }
      },  onAjaxError: ({ xhr, error}) =>
        {
          // if(xhr.status == 401) {
          //   this.authService.Gettoken(this.config.Usertoken,this.config.Passtoken).pipe(
          //     switchMap((res)=>{
          //       this.authService.setAccessToken(res);
          //       return "";
          //     })
          //   )
          // }
        },
        key: 'IdDocumento',
        /*  loadUrl: serviceUrl + '/Get?id='+this.user.IdConsultorio, */
        loadUrl: serviceUrl + '/Get?id=1002',
        insertUrl: serviceUrl + '/Post',
        updateUrl: serviceUrl + '/Put',
        deleteUrl: serviceUrl + '/Delete'
    });
      
       }
           onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
        
           };
}
