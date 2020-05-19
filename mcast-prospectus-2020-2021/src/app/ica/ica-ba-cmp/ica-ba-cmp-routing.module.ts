import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaCmpPage } from './ica-ba-cmp.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaCmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaCmpPageRoutingModule {}
