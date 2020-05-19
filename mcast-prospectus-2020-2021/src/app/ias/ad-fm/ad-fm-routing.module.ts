import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdFmPage } from './ad-fm.page';

const routes: Routes = [
  {
    path: '',
    component: AdFmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdFmPageRoutingModule {}
