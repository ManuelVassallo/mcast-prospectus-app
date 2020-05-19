import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoFcCPage } from './gozo-fc-c.page';

const routes: Routes = [
  {
    path: '',
    component: GozoFcCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoFcCPageRoutingModule {}
