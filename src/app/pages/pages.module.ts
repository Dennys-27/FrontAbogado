
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule,
  NgbNavModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { DxButtonModule,DxPopupModule, DxDataGridModule, DxDateBoxModule, DxNumberBoxModule, DxRadioGroupModule, DxSelectBoxModule, DxTemplateModule, DxFileUploaderModule, DxProgressBarModule } from 'devextreme-angular';
import { FlatpickrModule } from 'angularx-flatpickr';

import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
// import { NgxUsefulSwiperModule } from '@duxor/ngx-useful-swiper';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WidgetModule } from '../shared/widget/widget.module';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from "./dashboards/dashboards.module";
import { AppsModule } from "./apps/apps.module";
import { EcommerceModule } from "./ecommerce/ecommerce.module";
import { UsuarioComponent } from './usuario/usuario.component';

import { NgSelectModule } from '@ng-select/ng-select';

import { LoadingComponent } from './loading/loading.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { EmpleadosComponent } from './empleados/empleados.component';

import { ConsultaComponent } from './consulta/consulta.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ATSComponent } from './ats/ats.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConsultoriosComponent } from './consultorios/consultorios.component';
import { AbogadosComponent } from './abogados/abogados.component';
import { CasosComponent } from './casos/casos.component';
import { TareasComponent } from './tareas/tareas.component';
import { ContactoclientesComponent } from './contactoclientes/contactoclientes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    UsuarioComponent,
    LoadingComponent,
    EmpleadosComponent,
    ATSComponent,
    ConsultaComponent,
    ContrasenaComponent,
    MisdatosComponent,
    ClientesComponent,
    ConsultoriosComponent,
    NotificacionesComponent,
    AbogadosComponent,
    CasosComponent,
    TareasComponent,
    ContactoclientesComponent
  ],
  imports: [
    CommonModule,PdfViewerModule,DxDataGridModule,DxSelectBoxModule,DxDateBoxModule,
    FormsModule,ReactiveFormsModule,DxTemplateModule,DxPopupModule,DxFileUploaderModule,DxProgressBarModule,
    NgbToastModule,
    NgbProgressbarModule,DropzoneModule,NgbDatepickerModule,
    FlatpickrModule.forRoot(),
    NgApexchartsModule,NgbNavModule,
    LeafletModule,
    NgbDropdownModule,NgSelectModule,
    PagesRoutingModule,

    SharedModule,
    WidgetModule,
    LightboxModule,
    DashboardsModule,
    AppsModule,
    EcommerceModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
