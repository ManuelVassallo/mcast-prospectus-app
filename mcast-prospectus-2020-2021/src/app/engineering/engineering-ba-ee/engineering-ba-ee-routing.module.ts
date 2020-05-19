import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaEePage } from './engineering-ba-ee.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaEePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaEePageRoutingModule {}
