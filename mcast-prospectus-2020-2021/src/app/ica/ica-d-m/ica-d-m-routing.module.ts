import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaDMPage } from './ica-d-m.page';

const routes: Routes = [
  {
    path: '',
    component: IcaDMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaDMPageRoutingModule {}
