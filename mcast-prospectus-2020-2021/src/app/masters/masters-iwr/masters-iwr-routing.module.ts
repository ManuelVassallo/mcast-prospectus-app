import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersIwrPage } from './masters-iwr.page';

const routes: Routes = [
  {
    path: '',
    component: MastersIwrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersIwrPageRoutingModule {}
