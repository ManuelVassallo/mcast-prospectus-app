import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaEngineeringPage } from './advanced-diploma-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaEngineeringPageRoutingModule {}
