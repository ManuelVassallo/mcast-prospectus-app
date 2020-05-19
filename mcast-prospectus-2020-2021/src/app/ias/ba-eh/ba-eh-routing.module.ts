import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaEhPage } from './ba-eh.page';

const routes: Routes = [
  {
    path: '',
    component: BaEhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaEhPageRoutingModule {}
