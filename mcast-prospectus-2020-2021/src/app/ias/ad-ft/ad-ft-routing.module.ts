import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdFtPage } from './ad-ft.page';

const routes: Routes = [
  {
    path: '',
    component: AdFtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdFtPageRoutingModule {}
