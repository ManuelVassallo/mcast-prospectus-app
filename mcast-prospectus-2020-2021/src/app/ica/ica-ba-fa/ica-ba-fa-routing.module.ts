import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaFaPage } from './ica-ba-fa.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaFaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaFaPageRoutingModule {}
