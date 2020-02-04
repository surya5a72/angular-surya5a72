import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AreaNavigation} from '../AreaRouterModule';

@NgModule({
  imports:  [ FormsModule, RouterModule.forChild(AreaNavigation)],
  exports:[RouterModule]
})
export class AreaRouterModule { }
