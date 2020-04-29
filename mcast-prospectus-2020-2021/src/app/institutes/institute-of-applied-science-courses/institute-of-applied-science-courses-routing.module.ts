import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfAppliedScienceCoursesPage } from './institute-of-applied-science-courses.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfAppliedScienceCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfAppliedScienceCoursesPageRoutingModule {}
