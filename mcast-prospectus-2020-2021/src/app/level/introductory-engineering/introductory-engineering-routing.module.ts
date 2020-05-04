import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryEngineeringPage } from './introductory-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryEngineeringPageRoutingModule {}
