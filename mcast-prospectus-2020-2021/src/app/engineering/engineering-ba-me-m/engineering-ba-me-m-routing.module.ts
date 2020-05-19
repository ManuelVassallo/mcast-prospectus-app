import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaMeMPage } from './engineering-ba-me-m.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaMeMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaMeMPageRoutingModule {}
