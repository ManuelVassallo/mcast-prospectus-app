import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaIcaPage } from './advanced-diploma-ica.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaIcaPageRoutingModule {}
