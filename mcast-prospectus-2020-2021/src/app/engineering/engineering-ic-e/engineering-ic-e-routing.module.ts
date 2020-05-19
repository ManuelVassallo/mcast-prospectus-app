import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringIcEPage } from './engineering-ic-e.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringIcEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringIcEPageRoutingModule {}
