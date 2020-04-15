import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalandceoPage } from './principalandceo.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalandceoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalandceoPageRoutingModule {}
