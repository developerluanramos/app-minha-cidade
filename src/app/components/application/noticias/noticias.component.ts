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
    NzDividerComponent
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  public noticias : NoticiaInterface[] | undefined;
  constructor(
    private noticiasService: NoticiasService
  ) {
  }

  ngOnInit() {
    this.noticiasService.list({}).subscribe((response : any) => {
      this.noticias = response.items
      console.log(this.noticias)
    })
  }
}
