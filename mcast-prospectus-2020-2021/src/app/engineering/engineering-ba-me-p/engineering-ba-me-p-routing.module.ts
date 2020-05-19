import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaMePPage } from './engineering-ba-me-p.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaMePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaMePPageRoutingModule {}
