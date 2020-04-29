import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteForTheCreativeArtsHomePagePage } from './institute-for-the-creative-arts-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteForTheCreativeArtsHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteForTheCreativeArtsHomePagePageRoutingModule {}
