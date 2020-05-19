import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaSdPage } from './ica-ba-sd.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaSdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaSdPageRoutingModule {}
