import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdGdImPage } from './ica-ad-gd-im.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdGdImPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdGdImPageRoutingModule {}
