import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaImPage } from './ica-ba-im.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaImPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaImPageRoutingModule {}
