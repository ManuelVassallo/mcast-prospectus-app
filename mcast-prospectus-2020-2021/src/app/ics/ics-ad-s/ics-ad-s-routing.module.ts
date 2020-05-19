import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsAdSPage } from './ics-ad-s.page';

const routes: Routes = [
  {
    path: '',
    component: IcsAdSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsAdSPageRoutingModule {}
