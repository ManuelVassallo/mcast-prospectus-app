import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdPtPage } from './ad-pt.page';

const routes: Routes = [
  {
    path: '',
    component: AdPtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdPtPageRoutingModule {}
