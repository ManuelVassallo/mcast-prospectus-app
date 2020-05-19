import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcBPage } from './ic-b.page';

const routes: Routes = [
  {
    path: '',
    component: IcBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcBPageRoutingModule {}
