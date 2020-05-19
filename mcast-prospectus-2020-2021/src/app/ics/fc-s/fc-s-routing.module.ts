import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcSPage } from './fc-s.page';

const routes: Routes = [
  {
    path: '',
    component: FcSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcSPageRoutingModule {}
