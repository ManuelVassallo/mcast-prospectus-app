import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoFcWbPage } from './gozo-fc-wb.page';

const routes: Routes = [
  {
    path: '',
    component: GozoFcWbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoFcWbPageRoutingModule {}
