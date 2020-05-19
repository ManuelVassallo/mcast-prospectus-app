import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdMePage } from './engineering-ad-me.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdMePageRoutingModule {}
