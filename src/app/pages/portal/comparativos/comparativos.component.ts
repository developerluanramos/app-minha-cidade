import { Component } from '@angular/core';
import {
  ComparativoPaisesComponent
} from "../../../components/application/comparativo-paises/comparativo-paises.component";

@Component({
  selector: 'app-comparativos',
  standalone: true,
  imports: [
    ComparativoPaisesComponent
  ],
  templateUrl: './comparativos.component.html',
  styleUrl: './comparativos.component.scss'
})
export class ComparativosComponent {

}
