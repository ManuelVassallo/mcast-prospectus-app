import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaIcAdPage } from './ica-ic-ad.page';

const routes: Routes = [
  {
    path: '',
    component: IcaIcAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaIcAdPageRoutingModule {}
