import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDJfPage } from './engineering-d-jf.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDJfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDJfPageRoutingModule {}
