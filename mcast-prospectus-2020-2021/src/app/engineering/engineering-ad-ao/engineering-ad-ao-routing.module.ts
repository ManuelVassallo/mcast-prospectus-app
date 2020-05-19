import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdAoPage } from './engineering-ad-ao.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdAoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdAoPageRoutingModule {}
