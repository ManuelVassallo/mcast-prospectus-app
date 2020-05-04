import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorBusinessPage } from './bachelor-business.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorBusinessPageRoutingModule {}
