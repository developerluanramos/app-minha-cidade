import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/portal/portal.module').then((m) => m.PortalModule),
  }
];
