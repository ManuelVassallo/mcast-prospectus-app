import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDiplomaGozoPage } from './advanced-diploma-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDiplomaGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedDiplomaGozoPageRoutingModule {}
