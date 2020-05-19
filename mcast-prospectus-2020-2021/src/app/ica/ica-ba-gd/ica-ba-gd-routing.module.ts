import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaGdPage } from './ica-ba-gd.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaGdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaGdPageRoutingModule {}
