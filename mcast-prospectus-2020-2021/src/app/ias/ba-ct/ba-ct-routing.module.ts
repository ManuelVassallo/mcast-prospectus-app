import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaCtPage } from './ba-ct.page';

const routes: Routes = [
  {
    path: '',
    component: BaCtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaCtPageRoutingModule {}
