import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsAdCcLDPage } from './ics-ad-cc-l-d.page';

const routes: Routes = [
  {
    path: '',
    component: IcsAdCcLDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsAdCcLDPageRoutingModule {}
