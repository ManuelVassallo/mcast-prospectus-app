import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaCePage } from './engineering-ba-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaCePageRoutingModule {}
