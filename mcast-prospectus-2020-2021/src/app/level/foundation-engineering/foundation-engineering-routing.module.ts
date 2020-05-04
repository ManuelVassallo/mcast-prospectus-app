import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationEngineeringPage } from './foundation-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationEngineeringPageRoutingModule {}
