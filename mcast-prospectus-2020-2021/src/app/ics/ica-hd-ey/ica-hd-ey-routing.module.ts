import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaHdEyPage } from './ica-hd-ey.page';

const routes: Routes = [
  {
    path: '',
    component: IcaHdEyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaHdEyPageRoutingModule {}
