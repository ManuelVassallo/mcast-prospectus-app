import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdJfdmPage } from './engineering-ad-jfdm.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdJfdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdJfdmPageRoutingModule {}
