import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorGozoPage } from './bachelor-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorGozoPageRoutingModule {}
