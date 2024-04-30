import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {localidadesRoutes} from "./localidades.routes";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(localidadesRoutes)
  ]
})
export class LocalidadesModule { }
