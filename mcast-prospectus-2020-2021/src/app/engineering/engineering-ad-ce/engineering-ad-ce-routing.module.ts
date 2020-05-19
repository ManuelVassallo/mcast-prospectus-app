import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdCePage } from './engineering-ad-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdCePageRoutingModule {}
