import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdCmpPage } from './ica-ad-cmp.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdCmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdCmpPageRoutingModule {}
