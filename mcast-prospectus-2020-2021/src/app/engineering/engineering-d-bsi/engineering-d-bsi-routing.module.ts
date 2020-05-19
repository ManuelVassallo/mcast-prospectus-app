import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDBsiPage } from './engineering-d-bsi.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDBsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDBsiPageRoutingModule {}
