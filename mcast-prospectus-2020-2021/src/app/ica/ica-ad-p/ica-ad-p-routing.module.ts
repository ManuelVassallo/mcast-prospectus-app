import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdPPage } from './ica-ad-p.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdPPageRoutingModule {}
