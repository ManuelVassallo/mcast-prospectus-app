import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoBusinessPage } from './institute-info-business.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoBusinessPageRoutingModule {}
