import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersRPage } from './masters-r.page';

const routes: Routes = [
  {
    path: '',
    component: MastersRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRPageRoutingModule {}
