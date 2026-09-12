import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { TurnoNuevo } from './turno-nuevo/turno-nuevo/turno-nuevo';
import { Login } from './login/login';
export const routes: Routes = [  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },{path:'dashboard',component:Dashboard},
    {path:'turnonuevo',component:TurnoNuevo},
    {path:'login',component:Login}
];
