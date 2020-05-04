import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaEngineeringPage } from './diploma-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaEngineeringPageRoutingModule {}
