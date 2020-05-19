import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersEssPage } from './masters-ess.page';

const routes: Routes = [
  {
    path: '',
    component: MastersEssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersEssPageRoutingModule {}
