import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringIcCePage } from './engineering-ic-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringIcCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringIcCePageRoutingModule {}
