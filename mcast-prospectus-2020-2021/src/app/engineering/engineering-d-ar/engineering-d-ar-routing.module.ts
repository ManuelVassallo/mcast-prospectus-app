import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDArPage } from './engineering-d-ar.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDArPageRoutingModule {}
