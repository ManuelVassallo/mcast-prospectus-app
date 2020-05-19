import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdChsPage } from './ica-ad-chs.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdChsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdChsPageRoutingModule {}
