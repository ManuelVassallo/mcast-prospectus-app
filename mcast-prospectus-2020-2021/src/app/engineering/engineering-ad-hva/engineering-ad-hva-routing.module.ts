import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdHvaPage } from './engineering-ad-hva.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdHvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdHvaPageRoutingModule {}
