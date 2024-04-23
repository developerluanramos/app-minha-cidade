import { Routes } from '@angular/router';
import {PortalComponent} from "./portal.component";


export const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }
];
