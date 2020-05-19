import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringBaBsePage } from './engineering-ba-bse.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringBaBsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringBaBsePageRoutingModule {}
