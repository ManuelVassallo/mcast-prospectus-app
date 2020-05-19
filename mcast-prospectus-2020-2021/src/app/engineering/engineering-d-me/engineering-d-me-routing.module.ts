import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDMePage } from './engineering-d-me.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDMePageRoutingModule {}
