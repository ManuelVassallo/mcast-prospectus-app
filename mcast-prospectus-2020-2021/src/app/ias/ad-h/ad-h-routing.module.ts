import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdHPage } from './ad-h.page';

const routes: Routes = [
  {
    path: '',
    component: AdHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdHPageRoutingModule {}
