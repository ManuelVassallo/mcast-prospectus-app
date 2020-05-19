import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaMePage } from './engineering-ba-me.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaMePageRoutingModule {}
