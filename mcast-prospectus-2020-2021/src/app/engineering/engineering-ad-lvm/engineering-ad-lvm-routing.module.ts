import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdLvmPage } from './engineering-ad-lvm.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdLvmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdLvmPageRoutingModule {}
