import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {portalRoutes} from "./portal.routes";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes)
  ]
})
export class PortalModule { }
