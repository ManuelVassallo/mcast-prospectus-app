import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoFcEsPage } from './gozo-fc-es.page';

const routes: Routes = [
  {
    path: '',
    component: GozoFcEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoFcEsPageRoutingModule {}
