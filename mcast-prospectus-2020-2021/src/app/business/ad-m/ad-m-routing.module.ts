import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdMPage } from './ad-m.page';

const routes: Routes = [
  {
    path: '',
    component: AdMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdMPageRoutingModule {}
