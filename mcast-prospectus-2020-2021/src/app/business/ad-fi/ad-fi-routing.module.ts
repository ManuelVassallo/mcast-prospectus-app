import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdFiPage } from './ad-fi.page';

const routes: Routes = [
  {
    path: '',
    component: AdFiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdFiPageRoutingModule {}
