import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaBusinessPage } from './advanced-diploma-business.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaBusinessPageRoutingModule {}
