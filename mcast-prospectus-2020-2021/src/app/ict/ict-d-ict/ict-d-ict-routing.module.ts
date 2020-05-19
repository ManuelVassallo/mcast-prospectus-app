import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctDIctPage } from './ict-d-ict.page';

const routes: Routes = [
  {
    path: '',
    component: IctDIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctDIctPageRoutingModule {}
