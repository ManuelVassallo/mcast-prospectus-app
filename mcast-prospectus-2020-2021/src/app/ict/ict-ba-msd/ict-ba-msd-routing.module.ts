import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctBaMsdPage } from './ict-ba-msd.page';

const routes: Routes = [
  {
    path: '',
    component: IctBaMsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctBaMsdPageRoutingModule {}
