import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoCampusHomePagePage } from './gozo-campus-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: GozoCampusHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoCampusHomePagePageRoutingModule {}
