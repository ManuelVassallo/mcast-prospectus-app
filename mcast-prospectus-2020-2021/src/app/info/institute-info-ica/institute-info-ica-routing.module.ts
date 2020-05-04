import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoIcaPage } from './institute-info-ica.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoIcaPageRoutingModule {}
