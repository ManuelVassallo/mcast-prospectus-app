import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaBePage } from './engineering-ba-be.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaBePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaBePageRoutingModule {}
