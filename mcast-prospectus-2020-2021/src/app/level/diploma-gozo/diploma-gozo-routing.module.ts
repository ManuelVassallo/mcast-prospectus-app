import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaGozoPage } from './diploma-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaGozoPageRoutingModule {}
