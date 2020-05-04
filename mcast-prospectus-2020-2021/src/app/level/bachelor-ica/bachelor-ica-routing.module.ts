import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorIcaPage } from './bachelor-ica.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorIcaPageRoutingModule {}
