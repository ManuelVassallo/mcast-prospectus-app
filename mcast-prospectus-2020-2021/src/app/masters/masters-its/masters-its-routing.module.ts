import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersItsPage } from './masters-its.page';

const routes: Routes = [
  {
    path: '',
    component: MastersItsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersItsPageRoutingModule {}
