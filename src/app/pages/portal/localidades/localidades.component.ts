import { Component } from '@angular/core';
import {
  ComparativoPaisesComponent
} from "../../../components/application/comparativo-paises/comparativo-paises.component";
import {NoticiasComponent} from "../../../components/application/noticias/noticias.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-localidades',
  standalone: true,
  imports: [
    ComparativoPaisesComponent,
    NoticiasComponent,
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './localidades.component.html',
  styleUrl: './localidades.component.scss'
})
export class LocalidadesComponent {

}
