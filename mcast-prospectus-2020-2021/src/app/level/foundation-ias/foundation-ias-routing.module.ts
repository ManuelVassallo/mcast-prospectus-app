import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationIasPage } from './foundation-ias.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationIasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationIasPageRoutingModule {}
