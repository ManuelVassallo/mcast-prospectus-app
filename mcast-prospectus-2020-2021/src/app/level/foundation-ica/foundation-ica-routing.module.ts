import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationIcaPage } from './foundation-ica.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationIcaPageRoutingModule {}
