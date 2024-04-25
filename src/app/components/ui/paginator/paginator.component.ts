import {Component, Input, Output} from '@angular/core';
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {FormsModule} from "@angular/forms";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {PaginationInterface} from "../../../models/pagination.interface";
import EventEmitter from "node:events";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    NzPaginationComponent,
    NzColDirective,
    FormsModule,
    NzRowDirective,
    NzFlexDirective
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input()
  pagination: PaginationInterface = {
    count: 0,
    items: [],
    nextPage: 0,
    page: 1,
    previousPage: 0,
    showingFrom: 0,
    showingTo: 0,
    totalPages: 0
  };

  @Output('changePage') changePage: EventEmitter<any> = new EventEmitter();

  changePageEvent(newPageNumber: number) {
    console.log('teste')
    this.changePage.emit('changePage', newPageNumber);
  }
}
