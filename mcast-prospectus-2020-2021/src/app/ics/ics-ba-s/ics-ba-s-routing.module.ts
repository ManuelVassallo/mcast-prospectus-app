import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsBaSPage } from './ics-ba-s.page';

const routes: Routes = [
  {
    path: '',
    component: IcsBaSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsBaSPageRoutingModule {}
