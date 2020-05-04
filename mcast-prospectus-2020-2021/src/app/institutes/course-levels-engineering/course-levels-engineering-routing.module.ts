import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsEngineeringPage } from './course-levels-engineering.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsEngineeringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsEngineeringPageRoutingModule {}
