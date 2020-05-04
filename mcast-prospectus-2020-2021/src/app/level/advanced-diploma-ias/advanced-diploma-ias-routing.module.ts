import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaIasPage } from './advanced-diploma-ias.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaIasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaIasPageRoutingModule {}
