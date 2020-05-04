import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaIctPage } from './diploma-ict.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaIctPageRoutingModule {}
