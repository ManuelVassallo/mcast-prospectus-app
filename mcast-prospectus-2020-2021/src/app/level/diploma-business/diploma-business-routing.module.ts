import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaBusinessPage } from './diploma-business.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaBusinessPageRoutingModule {}
