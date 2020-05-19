import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDEiPage } from './engineering-d-ei.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDEiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDEiPageRoutingModule {}
