import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersHomePagePage } from './masters-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: MastersHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersHomePagePageRoutingModule {}
