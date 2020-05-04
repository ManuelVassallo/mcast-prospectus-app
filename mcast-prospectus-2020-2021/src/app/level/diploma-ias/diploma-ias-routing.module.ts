import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaIasPage } from './diploma-ias.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaIasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaIasPageRoutingModule {}
