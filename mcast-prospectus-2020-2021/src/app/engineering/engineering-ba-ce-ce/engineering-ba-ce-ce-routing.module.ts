import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaCeCePage } from './engineering-ba-ce-ce.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaCeCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaCeCePageRoutingModule {}
