import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaJPage } from './ica-ba-j.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaJPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaJPageRoutingModule {}
