import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsICSPage } from './course-levels-ics.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsICSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsICSPageRoutingModule {}
