import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcCPage } from './ic-c.page';

const routes: Routes = [
  {
    path: '',
    component: IcCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcCPageRoutingModule {}
