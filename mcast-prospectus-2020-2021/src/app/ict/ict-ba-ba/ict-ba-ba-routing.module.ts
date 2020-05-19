import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctBaBaPage } from './ict-ba-ba.page';

const routes: Routes = [
  {
    path: '',
    component: IctBaBaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctBaBaPageRoutingModule {}
