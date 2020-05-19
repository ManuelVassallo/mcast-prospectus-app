import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctAdItSPage } from './ict-ad-it-s.page';

const routes: Routes = [
  {
    path: '',
    component: IctAdItSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctAdItSPageRoutingModule {}
