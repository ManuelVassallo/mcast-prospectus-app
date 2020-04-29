import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteOfCommunityServiceHomePagePage } from './institute-of-community-service-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteOfCommunityServiceHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteOfCommunityServiceHomePagePageRoutingModule {}
