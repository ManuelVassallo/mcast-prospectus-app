import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IctAdItMPage } from './ict-ad-it-m.page';

const routes: Routes = [
  {
    path: '',
    component: IctAdItMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IctAdItMPageRoutingModule {}
