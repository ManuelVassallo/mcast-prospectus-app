import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KsmsmainaimsPage } from './ksmsmainaims.page';

const routes: Routes = [
  {
    path: '',
    component: KsmsmainaimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KsmsmainaimsPageRoutingModule {}
