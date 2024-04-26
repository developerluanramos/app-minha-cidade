import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {PortalModule} from "./pages/portal/portal.module";
import {HttpClientModule} from "@angular/common/http";
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    PortalModule,
    NgApexchartsModule
  ]
})
export class AppModule { }
