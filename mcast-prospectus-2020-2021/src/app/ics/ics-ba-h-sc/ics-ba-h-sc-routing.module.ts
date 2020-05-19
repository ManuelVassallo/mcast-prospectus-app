import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsBaHScPage } from './ics-ba-h-sc.page';

const routes: Routes = [
  {
    path: '',
    component: IcsBaHScPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsBaHScPageRoutingModule {}
