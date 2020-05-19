import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctFcIctPage } from './ict-fc-ict.page';

const routes: Routes = [
  {
    path: '',
    component: IctFcIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctFcIctPageRoutingModule {}
