import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsICTPage } from './course-levels-ict.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsICTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsICTPageRoutingModule {}
