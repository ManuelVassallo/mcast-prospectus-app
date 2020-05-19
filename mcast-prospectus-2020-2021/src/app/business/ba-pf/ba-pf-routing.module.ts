import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaPfPage } from './ba-pf.page';

const routes: Routes = [
  {
    path: '',
    component: BaPfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaPfPageRoutingModule {}
