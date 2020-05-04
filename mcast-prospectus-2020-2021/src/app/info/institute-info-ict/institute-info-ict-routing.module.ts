import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoIctPage } from './institute-info-ict.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoIctPageRoutingModule {}
