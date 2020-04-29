import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfICTHomePagePage } from './institute-of-ict-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfICTHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfICTHomePagePageRoutingModule {}
