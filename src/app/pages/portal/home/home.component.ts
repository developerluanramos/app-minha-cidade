import { Component, OnInit } from '@angular/core';
import {NoticiasComponent} from "../../../components/application/noticias/noticias.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NoticiasComponent,
    MatGridList,
    MatGridTile,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
  ) {
  }
}
