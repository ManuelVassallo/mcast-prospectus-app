import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaEePage } from './ba-ee.page';

const routes: Routes = [
  {
    path: '',
    component: BaEePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaEePageRoutingModule {}
