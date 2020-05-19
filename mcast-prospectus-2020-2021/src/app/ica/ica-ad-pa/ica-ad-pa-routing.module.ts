import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdPaPage } from './ica-ad-pa.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdPaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdPaPageRoutingModule {}
