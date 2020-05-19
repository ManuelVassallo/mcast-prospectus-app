import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdRPage } from './ad-r.page';

const routes: Routes = [
  {
    path: '',
    component: AdRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdRPageRoutingModule {}
