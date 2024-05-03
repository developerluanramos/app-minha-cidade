import {Component, KeyValueChanges, KeyValueDiffers, OnInit, SimpleChanges} from '@angular/core';
import {
  ComparativoPaisesComponent
} from "../../../components/application/comparativo-paises/comparativo-paises.component";
import {NoticiasComponent} from "../../../components/application/noticias/noticias.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {UfInterface} from "../../../models/uf.interface";
import {UfService} from "../../../services/localidades/uf.service";
import {response} from "express";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PaisesService} from "../../../services/paises.service";
import {MalhaService} from "../../../services/malhas/malha.service";

@Component({
  selector: 'app-localidades',
  standalone: true,
  imports: [
    ComparativoPaisesComponent,
    NoticiasComponent,
    NzColDirective,
    NzRowDirective,
    NzSelectComponent,
    NzOptionComponent,
    NgForOf,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './localidades.component.html',
  styleUrl: './localidades.component.scss'
})
export class LocalidadesComponent {
  public ufs: UfInterface[] = [];
  public selectedUfs: UfInterface[] = [];
  public malha: any = null;

  constructor(
    private ufService: UfService,
    private malhaService: MalhaService,
    private differs: KeyValueDiffers
  ) {
  }
  ngOnInit(): void {
    this.ufService.listAll()
      .subscribe(response => {
      this.ufs = <UfInterface[]>response
    });

    this.malhaService.getByPaisId('BR').subscribe(response => {
      console.log(URL.createObjectURL(response))
      this.malha = URL.createObjectURL(response)
    })
  }

  isNotSelected(uf: UfInterface): boolean {
    return this.selectedUfs.indexOf(uf) === -1;
  }
}
