import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoEngineeringPage } from './institute-info-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoEngineeringPageRoutingModule {}
