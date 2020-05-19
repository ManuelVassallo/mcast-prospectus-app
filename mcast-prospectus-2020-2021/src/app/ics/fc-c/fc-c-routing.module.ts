import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcCPage } from './fc-c.page';

const routes: Routes = [
  {
    path: '',
    component: FcCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcCPageRoutingModule {}
