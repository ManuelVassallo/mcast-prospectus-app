import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDEPage } from './engineering-d-e.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDEPageRoutingModule {}
