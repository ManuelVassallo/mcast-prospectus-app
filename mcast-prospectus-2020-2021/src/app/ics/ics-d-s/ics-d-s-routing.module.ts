import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsDSPage } from './ics-d-s.page';

const routes: Routes = [
  {
    path: '',
    component: IcsDSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsDSPageRoutingModule {}
