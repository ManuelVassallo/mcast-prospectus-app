import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcHPage } from './ic-h.page';

const routes: Routes = [
  {
    path: '',
    component: IcHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcHPageRoutingModule {}
