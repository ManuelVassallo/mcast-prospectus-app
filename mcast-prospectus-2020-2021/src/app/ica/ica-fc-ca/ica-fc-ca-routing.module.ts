import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaFcCaPage } from './ica-fc-ca.page';

const routes: Routes = [
  {
    path: '',
    component: IcaFcCaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaFcCaPageRoutingModule {}
