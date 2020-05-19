import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdIePage } from './engineering-ad-ie.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdIePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdIePageRoutingModule {}
