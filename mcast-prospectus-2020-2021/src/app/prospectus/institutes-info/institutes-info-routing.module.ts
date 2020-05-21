import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesInfoPage } from './institutes-info.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesInfoPageRoutingModule {}
