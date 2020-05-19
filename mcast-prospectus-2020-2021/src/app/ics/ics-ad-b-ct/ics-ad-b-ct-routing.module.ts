import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsAdBCtPage } from './ics-ad-b-ct.page';

const routes: Routes = [
  {
    path: '',
    component: IcsAdBCtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsAdBCtPageRoutingModule {}
