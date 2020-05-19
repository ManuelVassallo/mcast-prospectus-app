import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaQsPage } from './engineering-ba-qs.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaQsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaQsPageRoutingModule {}
