import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorIctPage } from './bachelor-ict.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorIctPageRoutingModule {}
