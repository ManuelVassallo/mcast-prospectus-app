import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdPlpgsPage } from './engineering-ad-plpgs.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdPlpgsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdPlpgsPageRoutingModule {}
