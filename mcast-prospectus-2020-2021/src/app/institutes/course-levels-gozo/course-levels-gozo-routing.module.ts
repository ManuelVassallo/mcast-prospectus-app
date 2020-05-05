import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsGozoPage } from './course-levels-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsGozoPageRoutingModule {}
