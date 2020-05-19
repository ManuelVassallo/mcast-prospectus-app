import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDDoPage } from './engineering-d-do.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDDoPageRoutingModule {}
