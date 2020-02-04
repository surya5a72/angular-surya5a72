import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AreaNavRoutes} from './AreaNavigation';

@NgModule({
  imports:  [ FormsModule, RouterModule.forChild(AreaNavRoutes)],
  exports:[RouterModule]
})
export class AreaRouterModule { }
