import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaIcsPage } from './advanced-diploma-ics.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaIcsPageRoutingModule {}
