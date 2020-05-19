import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAPage } from './ad-a.page';

const routes: Routes = [
  {
    path: '',
    component: AdAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAPageRoutingModule {}
