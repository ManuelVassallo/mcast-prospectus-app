import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListMastersPage } from './courses-list-masters.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesListMastersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesListMastersPageRoutingModule {}
