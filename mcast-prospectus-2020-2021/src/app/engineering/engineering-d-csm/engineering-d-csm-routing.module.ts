import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDCsmPage } from './engineering-d-csm.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDCsmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDCsmPageRoutingModule {}
