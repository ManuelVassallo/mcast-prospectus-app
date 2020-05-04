import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundationIcsPage } from './foundation-ics.page';

const routes: Routes = [
  {
    path: '',
    component: FoundationIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationIcsPageRoutingModule {}
