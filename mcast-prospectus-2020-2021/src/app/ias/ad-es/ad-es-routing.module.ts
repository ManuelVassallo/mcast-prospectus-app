import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdEsPage } from './ad-es.page';

const routes: Routes = [
  {
    path: '',
    component: AdEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdEsPageRoutingModule {}
