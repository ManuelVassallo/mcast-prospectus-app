import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAssPage } from './ad-ass.page';

const routes: Routes = [
  {
    path: '',
    component: AdAssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAssPageRoutingModule {}
