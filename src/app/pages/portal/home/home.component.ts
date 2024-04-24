import { Component, OnInit } from '@angular/core';
import {NoticiasComponent} from "../../../components/application/noticias/noticias.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {MentionOnSearchTypes, NzMentionComponent, NzMentionTriggerDirective} from "ng-zorro-antd/mention";
import {FormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, debounceTime, map, Observable, of, switchMap} from "rxjs";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf, NgIf} from "@angular/common";

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
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  randomUserUrl = 'https://servicodados.ibge.gov.br/api/v1/paises/indicadores/';
  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  isLoading = false;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() : void {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const getRandomNameList = (name: string): Observable<any> =>
      this.http
        .get(`${this.randomUserUrl}`)
        .pipe(
          catchError(() => of({ results: [] })),
          map((res: any) => res)
        )
        .pipe(map((list: any) => list.map((item: any) => `${item.id} ${item.indicador}`)));
    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getRandomNameList));
    optionList$.subscribe(data => {
      this.optionList = data;
      this.isLoading = false;
    });
  }

  onSearch(value: string): void {
    console.log('teste')
    this.isLoading = true;
    this.searchChange$.next(value);
  }

}
