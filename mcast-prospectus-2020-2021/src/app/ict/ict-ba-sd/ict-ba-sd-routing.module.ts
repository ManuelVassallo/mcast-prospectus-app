import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctBaSdPage } from './ict-ba-sd.page';

const routes: Routes = [
  {
    path: '',
    component: IctBaSdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctBaSdPageRoutingModule {}
