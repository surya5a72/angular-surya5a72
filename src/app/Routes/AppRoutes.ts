import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../Components/Home/Home.component';
import { ErrorComponent } from '../Components/Error/Error.component';

export class AppRoutes{
  constructor(){
    const NavRoutes: Routes =[
      { path: 'Home', component: HomeComponent},
      { path: 'Error', component: ErrorComponent},
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: '**', component: ErrorComponent }
    ];
    return NavRoutes;
  }
}


export const NavRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Form', component: 'Area.module#AreaModule'},
  { path: 'Employee', component: 'Area.module#AreaModule'},
  { path: 'Error', component: ErrorComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];