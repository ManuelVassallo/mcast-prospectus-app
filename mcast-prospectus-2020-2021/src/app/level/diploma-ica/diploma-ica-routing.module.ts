import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaIcaPage } from './diploma-ica.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaIcaPageRoutingModule {}
