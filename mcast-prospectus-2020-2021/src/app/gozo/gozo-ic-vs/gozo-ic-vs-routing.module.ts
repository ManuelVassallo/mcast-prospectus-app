import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoIcVsPage } from './gozo-ic-vs.page';

const routes: Routes = [
  {
    path: '',
    component: GozoIcVsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoIcVsPageRoutingModule {}
