import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfAppliedScienceCourseLevelListPage } from './institute-of-applied-science-course-level-list.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfAppliedScienceCourseLevelListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfAppliedScienceCourseLevelListPageRoutingModule {}
