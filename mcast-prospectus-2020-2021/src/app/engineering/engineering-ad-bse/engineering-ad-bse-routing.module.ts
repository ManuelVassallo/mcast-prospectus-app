import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdBsePage } from './engineering-ad-bse.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdBsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdBsePageRoutingModule {}
