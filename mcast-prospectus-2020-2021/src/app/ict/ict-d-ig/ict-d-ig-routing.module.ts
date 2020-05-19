import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctDIgPage } from './ict-d-ig.page';

const routes: Routes = [
  {
    path: '',
    component: IctDIgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctDIgPageRoutingModule {}
