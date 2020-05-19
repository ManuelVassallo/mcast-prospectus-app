import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDMhsPage } from './engineering-d-mhs.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDMhsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDMhsPageRoutingModule {}
