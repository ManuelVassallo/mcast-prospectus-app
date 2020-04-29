import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfEngineeringAndTransportHomePagePage } from './institute-of-engineering-and-transport-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfEngineeringAndTransportHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfEngineeringAndTransportHomePagePageRoutingModule {}
