import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoFcIctPage } from './gozo-fc-ict.page';

const routes: Routes = [
  {
    path: '',
    component: GozoFcIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoFcIctPageRoutingModule {}
