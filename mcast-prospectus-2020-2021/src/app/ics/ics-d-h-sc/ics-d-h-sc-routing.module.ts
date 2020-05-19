import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsDHScPage } from './ics-d-h-sc.page';

const routes: Routes = [
  {
    path: '',
    component: IcsDHScPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsDHScPageRoutingModule {}
