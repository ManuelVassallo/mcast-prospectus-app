import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDAsrPage } from './engineering-d-asr.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDAsrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDAsrPageRoutingModule {}
