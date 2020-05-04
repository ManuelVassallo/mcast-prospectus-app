import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorEngineeringPage } from './bachelor-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorEngineeringPageRoutingModule {}
