import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {portalRoutes} from "./portal.routes";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes)
  ]
})
export class PortalModule { }
