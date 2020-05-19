import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcAppliedSciencePage } from './fc-applied-science.page';

const routes: Routes = [
  {
    path: '',
    component: FcAppliedSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcAppliedSciencePageRoutingModule {}
