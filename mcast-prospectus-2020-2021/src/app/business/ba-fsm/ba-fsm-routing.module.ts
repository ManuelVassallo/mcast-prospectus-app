import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaFsmPage } from './ba-fsm.page';

const routes: Routes = [
  {
    path: '',
    component: BaFsmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaFsmPageRoutingModule {}
