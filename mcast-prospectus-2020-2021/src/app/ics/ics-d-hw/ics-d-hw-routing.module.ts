import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsDHwPage } from './ics-d-hw.page';

const routes: Routes = [
  {
    path: '',
    component: IcsDHwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsDHwPageRoutingModule {}
