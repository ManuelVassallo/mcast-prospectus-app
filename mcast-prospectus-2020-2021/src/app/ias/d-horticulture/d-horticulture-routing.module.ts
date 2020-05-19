import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DHorticulturePage } from './d-horticulture.page';

const routes: Routes = [
  {
    path: '',
    component: DHorticulturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DHorticulturePageRoutingModule {}
