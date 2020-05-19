import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdMPage } from './engineering-ad-m.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdMPageRoutingModule {}
