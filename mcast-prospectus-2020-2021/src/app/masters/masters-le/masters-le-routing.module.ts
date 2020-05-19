import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersLePage } from './masters-le.page';

const routes: Routes = [
  {
    path: '',
    component: MastersLePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersLePageRoutingModule {}
