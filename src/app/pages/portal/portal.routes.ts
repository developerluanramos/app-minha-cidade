import { Routes } from '@angular/router';
import {PortalComponent} from "./portal.component";


export const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'localidades',
    component: PortalComponent,
    loadChildren: () => import('./localidades/localidades.module').then((m) => m.LocalidadesModule),
  },
  {
    path: 'comparativos',
    component: PortalComponent,
    loadChildren: () => import('./comparativos/comparativos.module').then((m) => m.ComparativosModule),
  }
];
