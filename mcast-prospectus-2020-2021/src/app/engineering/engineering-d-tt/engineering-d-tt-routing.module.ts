import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDTtPage } from './engineering-d-tt.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDTtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDTtPageRoutingModule {}
