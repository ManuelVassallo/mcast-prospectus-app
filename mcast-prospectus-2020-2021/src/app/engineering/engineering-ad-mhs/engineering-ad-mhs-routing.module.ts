import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringAdMhsPage } from './engineering-ad-mhs.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringAdMhsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringAdMhsPageRoutingModule {}