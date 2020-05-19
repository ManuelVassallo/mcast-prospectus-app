import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersHpbPage } from './masters-hpb.page';

const routes: Routes = [
  {
    path: '',
    component: MastersHpbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersHpbPageRoutingModule {}
