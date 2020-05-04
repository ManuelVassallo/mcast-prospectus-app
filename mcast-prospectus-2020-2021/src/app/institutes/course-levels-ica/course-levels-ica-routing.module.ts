import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsICAPage } from './course-levels-ica.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsICAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsICAPageRoutingModule {}
