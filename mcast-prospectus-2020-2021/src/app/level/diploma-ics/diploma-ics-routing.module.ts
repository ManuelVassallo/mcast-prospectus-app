import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaIcsPage } from './diploma-ics.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaIcsPageRoutingModule {}
