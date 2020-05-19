import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdPptPage } from './engineering-ad-ppt.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdPptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdPptPageRoutingModule {}
