import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringDHvaPage } from './engineering-d-hva.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringDHvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringDHvaPageRoutingModule {}
