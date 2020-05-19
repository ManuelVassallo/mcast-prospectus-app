import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringFcEPage } from './engineering-fc-e.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringFcEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringFcEPageRoutingModule {}
