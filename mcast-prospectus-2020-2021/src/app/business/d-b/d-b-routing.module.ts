import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DBPage } from './d-b.page';

const routes: Routes = [
  {
    path: '',
    component: DBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DBPageRoutingModule {}
