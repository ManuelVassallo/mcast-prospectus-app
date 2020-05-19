import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsBaIePage } from './ics-ba-ie.page';

const routes: Routes = [
  {
    path: '',
    component: IcsBaIePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsBaIePageRoutingModule {}
