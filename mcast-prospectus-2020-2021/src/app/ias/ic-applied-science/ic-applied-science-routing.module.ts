import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcAppliedSciencePage } from './ic-applied-science.page';

const routes: Routes = [
  {
    path: '',
    component: IcAppliedSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcAppliedSciencePageRoutingModule {}
