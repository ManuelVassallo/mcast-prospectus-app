import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersPgcRmPage } from './masters-pgc-rm.page';

const routes: Routes = [
  {
    path: '',
    component: MastersPgcRmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersPgcRmPageRoutingModule {}
