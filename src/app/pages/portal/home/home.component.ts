import { Component, OnInit } from '@angular/core';
import {NoticiasComponent} from "../../../components/application/noticias/noticias.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzMentionComponent, NzMentionTriggerDirective} from "ng-zorro-antd/mention";
import {FormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf, NgIf} from "@angular/common";
import {
  ComparativoPaisesComponent
} from "../../../components/application/comparativo-paises/comparativo-paises.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NoticiasComponent,
    MatGridList,
    MatGridTile,
    NzRowDirective,
    NzColDirective,
    NzDividerComponent,
    NzMentionComponent,
    FormsModule,
    NzInputDirective,
    NzMentionTriggerDirective,
    NzSelectComponent,
    NzOptionComponent,
    NzIconDirective,
    NgIf,
    NgForOf,
    ComparativoPaisesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
