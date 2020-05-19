import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringFcCePage } from './engineering-fc-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringFcCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringFcCePageRoutingModule {}
