import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersAsbPage } from './masters-asb.page';

const routes: Routes = [
  {
    path: '',
    component: MastersAsbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersAsbPageRoutingModule {}
