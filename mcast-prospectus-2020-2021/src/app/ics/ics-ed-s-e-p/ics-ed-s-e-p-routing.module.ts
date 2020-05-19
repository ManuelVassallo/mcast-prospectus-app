import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsEdSEPPage } from './ics-ed-s-e-p.page';

const routes: Routes = [
  {
    path: '',
    component: IcsEdSEPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsEdSEPPageRoutingModule {}
