import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctBaCsnPage } from './ict-ba-csn.page';

const routes: Routes = [
  {
    path: '',
    component: IctBaCsnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctBaCsnPageRoutingModule {}
