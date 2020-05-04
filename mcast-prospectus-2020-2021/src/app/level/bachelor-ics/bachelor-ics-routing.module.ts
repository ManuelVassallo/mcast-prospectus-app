import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorIcsPage } from './bachelor-ics.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorIcsPageRoutingModule {}
