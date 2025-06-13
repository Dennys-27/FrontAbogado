import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { ConsultaComponent } from "./consulta/consulta.component";
import { ContrasenaComponent } from "./contrasena/contrasena.component";
import { NotificacionesComponent } from "./notificaciones/notificaciones.component";
import { MisdatosComponent } from "./misdatos/misdatos.component";
import { ATSComponent } from "./ats/ats.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ConsultoriosComponent } from "./consultorios/consultorios.component";
import { AbogadosComponent } from "./abogados/abogados.component";
import { CasosComponent } from "./casos/casos.component";
import { TareasComponent } from "./tareas/tareas.component";
import { ContactoclientesComponent } from "./contactoclientes/contactoclientes.component";
import { DocumentosComponent } from "./documentos/documentos.component";
import { AuditoriasComponent } from "./auditorias/auditorias.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },

  {
    path: "consulta",
    component: ConsultaComponent,
  },
  {
    path: "ats",
    component: ATSComponent,
  },
  {
    path: "contrasena",
    component: ContrasenaComponent,
  },
  {
    path: "notificiones",
    component: NotificacionesComponent,
  },
  {
    path: "misdatos",
    component: MisdatosComponent,
  },
  {
    path: "clientes",
    component: ClientesComponent,
  },
  {
    path: "consultorios",
    component: ConsultoriosComponent,
  },
  {
    path: "abogados",
    component: AbogadosComponent,
  },
  {
    path: "casos",
    component: CasosComponent,
  },
  {
    path: "tareas",
    component: TareasComponent,
  },
  {
    path: "contactosclientes",
    component: ContactoclientesComponent,
  },
  {
    path: "documentos",
    component: DocumentosComponent,
  },
  {
    path: "asesorias",
    component: AuditoriasComponent,
  },
  {
    path: "",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "apps",
    loadChildren: () => import("./apps/apps.module").then((m) => m.AppsModule),
  },
  {
    path: "ecommerce",
    loadChildren: () =>
      import("./ecommerce/ecommerce.module").then((m) => m.EcommerceModule),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "tasks",
    loadChildren: () =>
      import("./tasks/tasks.module").then((m) => m.TasksModule),
  },
  {
    path: "crm",
    loadChildren: () => import("./crm/crm.module").then((m) => m.CrmModule),
  },
  {
    path: "crypto",
    loadChildren: () =>
      import("./crypto/crypto.module").then((m) => m.CryptoModule),
  },
  {
    path: "invoices",
    loadChildren: () =>
      import("./invoices/invoices.module").then((m) => m.InvoicesModule),
  },
  // {
  // //  path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
  // },
  {
    path: "pages",
    loadChildren: () =>
      import("./extrapages/extraspages.module").then(
        (m) => m.ExtraspagesModule
      ),
  },
  {
    path: "ui",
    loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
  },
  {
    path: "advance-ui",
    loadChildren: () =>
      import("./advance-ui/advance-ui.module").then((m) => m.AdvanceUiModule),
  },
  {
    path: "forms",
    loadChildren: () => import("./form/form.module").then((m) => m.FormModule),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
  },
  {
    path: "charts",
    loadChildren: () =>
      import("./charts/charts.module").then((m) => m.ChartsModule),
  },
  {
    path: "icons",
    loadChildren: () =>
      import("./icons/icons.module").then((m) => m.IconsModule),
  },
  {
    path: "maps",
    loadChildren: () => import("./maps/maps.module").then((m) => m.MapsModule),
  },
  {
    path: "marletplace",
    loadChildren: () =>
      import("./nft-marketplace/nft-marketplace.module").then(
        (m) => m.NftMarketplaceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
