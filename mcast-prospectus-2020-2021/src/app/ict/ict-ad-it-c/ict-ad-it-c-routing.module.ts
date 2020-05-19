import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctAdItCPage } from './ict-ad-it-c.page';

const routes: Routes = [
  {
    path: '',
    component: IctAdItCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctAdItCPageRoutingModule {}
