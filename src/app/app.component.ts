import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzButtonComponent,
    NzLayoutModule,
    NzMenuDirective,
    NzSubMenuComponent,
    NzMenuItemComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzIconDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Minha Cidade';

  constructor(
  ) {
  }
  goToPage(page : string) {
    location.href = page
  }
}
