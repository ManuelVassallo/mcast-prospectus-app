import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDLPage } from './engineering-d-l.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDLPageRoutingModule {}
