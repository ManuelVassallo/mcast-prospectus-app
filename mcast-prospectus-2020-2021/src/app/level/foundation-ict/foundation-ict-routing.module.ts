import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationIctPage } from './foundation-ict.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationIctPageRoutingModule {}
