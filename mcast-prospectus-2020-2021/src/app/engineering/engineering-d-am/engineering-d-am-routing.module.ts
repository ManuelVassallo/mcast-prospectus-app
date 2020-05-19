import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDAmPage } from './engineering-d-am.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDAmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDAmPageRoutingModule {}
