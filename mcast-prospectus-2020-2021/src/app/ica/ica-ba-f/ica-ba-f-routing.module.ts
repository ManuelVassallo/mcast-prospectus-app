import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaFPage } from './ica-ba-f.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaFPageRoutingModule {}
