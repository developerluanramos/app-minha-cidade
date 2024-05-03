import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ComparativosRoutes} from "./comparativos.routes";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ComparativosRoutes)
  ]
})
export class ComparativosModule { }
