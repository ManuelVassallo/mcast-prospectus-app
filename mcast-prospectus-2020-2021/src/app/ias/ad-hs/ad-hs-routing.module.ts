import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdHsPage } from './ad-hs.page';

const routes: Routes = [
  {
    path: '',
    component: AdHsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdHsPageRoutingModule {}
