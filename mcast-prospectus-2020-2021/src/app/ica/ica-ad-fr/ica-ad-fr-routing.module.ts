import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaAdFrPage } from './ica-ad-fr.page';

const routes: Routes = [
  {
    path: '',
    component: IcaAdFrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaAdFrPageRoutingModule {}
