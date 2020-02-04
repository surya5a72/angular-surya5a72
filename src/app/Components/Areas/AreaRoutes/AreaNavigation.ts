import {RouterModule,Routes}  from '@angular/router';

import {EmployeeComponent} from '../Employee/Employee.component';
import {FormsComponent} from '../Forms/Forms.component';

export const AreaNavRoutes : Routes = [
  { path:'Forms', component:FormsComponent},
  { path:'Employee', component:EmployeeComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
