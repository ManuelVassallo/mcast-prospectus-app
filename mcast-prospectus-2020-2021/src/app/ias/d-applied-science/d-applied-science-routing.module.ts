import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAppliedSciencePage } from './d-applied-science.page';

const routes: Routes = [
  {
    path: '',
    component: DAppliedSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAppliedSciencePageRoutingModule {}
