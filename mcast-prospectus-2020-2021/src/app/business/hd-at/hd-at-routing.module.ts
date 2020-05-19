import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HdAtPage } from './hd-at.page';

const routes: Routes = [
  {
    path: '',
    component: HdAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HdAtPageRoutingModule {}
