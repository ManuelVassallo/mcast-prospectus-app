import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaAmVnPage } from './ba-am-vn.page';

const routes: Routes = [
  {
    path: '',
    component: BaAmVnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaAmVnPageRoutingModule {}
