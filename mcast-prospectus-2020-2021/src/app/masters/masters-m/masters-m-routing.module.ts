import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersMPage } from './masters-m.page';

const routes: Routes = [
  {
    path: '',
    component: MastersMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersMPageRoutingModule {}
