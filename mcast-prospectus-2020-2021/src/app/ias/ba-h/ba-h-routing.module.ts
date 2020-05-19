import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaHPage } from './ba-h.page';

const routes: Routes = [
  {
    path: '',
    component: BaHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaHPageRoutingModule {}
