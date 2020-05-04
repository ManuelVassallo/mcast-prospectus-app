import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsBusinessPage } from './course-levels-business.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsBusinessPageRoutingModule {}
