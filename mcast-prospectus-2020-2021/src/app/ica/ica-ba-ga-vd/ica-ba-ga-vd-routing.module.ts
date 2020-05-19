import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaGaVdPage } from './ica-ba-ga-vd.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaGaVdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaGaVdPageRoutingModule {}
