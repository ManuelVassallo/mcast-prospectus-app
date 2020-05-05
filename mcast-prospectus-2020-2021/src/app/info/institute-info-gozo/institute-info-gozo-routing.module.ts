import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoGozoPage } from './institute-info-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoGozoPageRoutingModule {}
