import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcWbBHPage } from './fc-wb-b-h.page';

const routes: Routes = [
  {
    path: '',
    component: FcWbBHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcWbBHPageRoutingModule {}
