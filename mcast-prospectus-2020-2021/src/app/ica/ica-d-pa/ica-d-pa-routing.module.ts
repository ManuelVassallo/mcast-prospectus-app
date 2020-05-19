import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaDPaPage } from './ica-d-pa.page';

const routes: Routes = [
  {
    path: '',
    component: IcaDPaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaDPaPageRoutingModule {}
