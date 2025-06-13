import { Component } from "@angular/core";
import { DxDataGridTypes } from "devextreme-angular/ui/data-grid";
import { createStore } from "devextreme-aspnet-data-nojquery";
import { ConfiguracionService } from "src/app/core/services/configuracion.service";

@Component({
  selector: "app-auditorias",
  templateUrl: "./auditorias.component.html",
  styleUrl: "./auditorias.component.scss",
})
export class AuditoriasComponent {
  auditorias!: any[];
  remoteDataSource: any;
  constructor(private config: ConfiguracionService) {
    const serviceUrl: String = this.config.apiUrl + "Auditorias";
    this.remoteDataSource = createStore({
      onBeforeSend: function (operation, ajaxSettings) {
        // ajaxSettings.headers = {
        //     "Authorization": 'Bearer ' + token
        // }
      },
      onAjaxError: ({ xhr, error }) => {
        // if(xhr.status == 401) {
        //   this.authService.Gettoken(this.config.Usertoken,this.config.Passtoken).pipe(
        //     switchMap((res)=>{
        //       this.authService.setAccessToken(res);
        //       return "";
        //     })
        //   )
        // }
      },
      key: "IdAuditoria",
      /*  loadUrl: serviceUrl + '/Get?id='+this.user.IdConsultorio, */
      loadUrl: serviceUrl + "/Get?id=1",
      insertUrl: serviceUrl + "/Post",
      updateUrl: serviceUrl + "/Put",
      deleteUrl: serviceUrl + "/Delete",
    });
  }

  onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {};
}
