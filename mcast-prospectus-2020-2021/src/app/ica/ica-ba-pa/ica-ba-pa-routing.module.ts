import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaBaPaPage } from './ica-ba-pa.page';

const routes: Routes = [
  {
    path: '',
    component: IcaBaPaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaBaPaPageRoutingModule {}
