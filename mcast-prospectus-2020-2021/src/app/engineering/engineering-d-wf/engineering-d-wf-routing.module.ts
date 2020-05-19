import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDWfPage } from './engineering-d-wf.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDWfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDWfPageRoutingModule {}
