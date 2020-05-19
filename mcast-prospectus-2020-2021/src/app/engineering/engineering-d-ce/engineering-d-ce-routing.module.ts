import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDCePage } from './engineering-d-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDCePageRoutingModule {}
