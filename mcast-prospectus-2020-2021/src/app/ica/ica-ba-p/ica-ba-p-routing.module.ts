import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaPPage } from './ica-ba-p.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaPPageRoutingModule {}
