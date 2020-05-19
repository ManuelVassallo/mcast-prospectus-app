import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdWfPage } from './engineering-ad-wf.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdWfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdWfPageRoutingModule {}
