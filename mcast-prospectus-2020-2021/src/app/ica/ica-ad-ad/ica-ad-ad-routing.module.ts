import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdAdPage } from './ica-ad-ad.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdAdPageRoutingModule {}
