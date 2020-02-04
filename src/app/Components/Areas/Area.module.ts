import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from '../Areas/Employee/Employee.component';
import { FormsComponent } from '../Areas/Forms/Forms.component';
import { AreaRouterModule } from './AreaRoutes/AreaRouter.module';

@NgModule({
  imports:  [ FormsModule, AreaRouterModule],
  declarations: [ EmployeeComponent, FormsComponent ],
  exports:[ EmployeeComponent, FormsComponent ]
})
export class AreaModule { }
