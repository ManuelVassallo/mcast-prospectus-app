import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaHsPage } from './ba-hs.page';

const routes: Routes = [
  {
    path: '',
    component: BaHsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaHsPageRoutingModule {}
