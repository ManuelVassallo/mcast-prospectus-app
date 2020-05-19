import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaFmPage } from './ba-fm.page';

const routes: Routes = [
  {
    path: '',
    component: BaFmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaFmPageRoutingModule {}
