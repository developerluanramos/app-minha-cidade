import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NoticiasComponent} from "./noticias/noticias.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule
  ]
})
export class HomeModule { }
