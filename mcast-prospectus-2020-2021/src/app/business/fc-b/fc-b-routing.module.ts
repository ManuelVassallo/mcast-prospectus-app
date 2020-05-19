import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcBPage } from './fc-b.page';

const routes: Routes = [
  {
    path: '',
    component: FcBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcBPageRoutingModule {}
