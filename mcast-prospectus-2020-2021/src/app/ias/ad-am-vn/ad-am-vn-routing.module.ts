import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAmVnPage } from './ad-am-vn.page';

const routes: Routes = [
  {
    path: '',
    component: AdAmVnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAmVnPageRoutingModule {}
