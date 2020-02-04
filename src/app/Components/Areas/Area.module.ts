import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from '../Employee/Employee.component';
import { FormsComponent } from '../Forms/Forms.component';
import { AreaRouterModule } from '../AreaRouterModule';

@NgModule({
  imports:  [ FormsModule, AreaRouterModule],
  declarations: [ EmployeeComponent, FormsComponent ],
  exports:[ EmployeeComponent, FormsComponent ]
})
export class AreaModule { }
