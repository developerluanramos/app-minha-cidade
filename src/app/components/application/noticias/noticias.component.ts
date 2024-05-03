import { Component, OnInit } from '@angular/core';
import {NoticiasService} from "../../../services/noticias.service";
import {NoticiaInterface} from "../../../models/noticia.interface";
import {HttpClientModule} from "@angular/common/http";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSmImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {NzBadgeComponent} from "ng-zorro-antd/badge";
import {NzTagComponent} from "ng-zorro-antd/tag";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {PaginationInterface} from "../../../models/pagination.interface";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {FormsModule} from "@angular/forms";
import {NzSkeletonComponent} from "ng-zorro-antd/skeleton";
import {NzRadioComponent, NzRadioGroupComponent} from "ng-zorro-antd/radio";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCard,
    MatCardContent,
    NgForOf,
    MatCardTitle,
    MatCardHeader,
    MatCardImage,
    MatCardTitleGroup,
    MatCardSmImage,
    MatList,
    MatListItem,
    NzCardMetaComponent,
    NzCardComponent,
    NzTypographyComponent,
    DatePipe,
    NzBadgeComponent,
    NzTagComponent,
    NgIf,
    NzDividerComponent,
    NzPaginationComponent,
    NzRowDirective,
    NzColDirective,
    NzFlexDirective,
    FormsModule,
    NzSkeletonComponent,
    NzRadioGroupComponent,
    NzRadioComponent
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  public tipo: string = "noticia";
  public loading: boolean = true;
  public noticias : NoticiaInterface[] | undefined;
  public paginacao: PaginationInterface = {
    page: 1
  };

  constructor(
    private noticiasService: NoticiasService
  ) {
  }

  ngOnInit() {
    // this.paginacao.page = 1
    this.list()
  }

  list() {
    this.loading = true
    this.noticiasService.list({
      page: this.paginacao.page,
      tipo: this.tipo
    }).subscribe((response : PaginationInterface) => {
      this.paginacao = response
      this.noticias = response.items
      setTimeout(() => {this.loading = false}, 2000)
    })
  }

  changePage(event: any) {
    this.paginacao.page = event;
    this.list()
  }

  changeNoticiaTipo(novoTipo : any) {
    this.tipo = novoTipo
    this.list()
  }
}
