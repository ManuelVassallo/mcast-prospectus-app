import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorIasPage } from './bachelor-ias.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorIasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorIasPageRoutingModule {}
