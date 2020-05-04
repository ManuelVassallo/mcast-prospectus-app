import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationBusinessPage } from './foundation-business.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationBusinessPageRoutingModule {}
