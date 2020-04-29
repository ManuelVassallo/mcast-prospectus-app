import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfBusinessHomePagePage } from './institute-of-business-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfBusinessHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfBusinessHomePagePageRoutingModule {}
