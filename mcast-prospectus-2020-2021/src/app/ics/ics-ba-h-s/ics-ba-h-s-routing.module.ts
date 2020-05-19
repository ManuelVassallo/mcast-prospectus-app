import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsBaHSPage } from './ics-ba-h-s.page';

const routes: Routes = [
  {
    path: '',
    component: IcsBaHSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsBaHSPageRoutingModule {}
