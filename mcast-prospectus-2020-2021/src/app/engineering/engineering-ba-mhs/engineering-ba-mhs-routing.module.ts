import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaMhsPage } from './engineering-ba-mhs.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaMhsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaMhsPageRoutingModule {}
