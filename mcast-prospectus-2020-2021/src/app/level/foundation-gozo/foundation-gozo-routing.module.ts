import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationGozoPage } from './foundation-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationGozoPageRoutingModule {}
