import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctIcIctPage } from './ict-ic-ict.page';

const routes: Routes = [
  {
    path: '',
    component: IctIcIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctIcIctPageRoutingModule {}
