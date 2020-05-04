import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryBusinessPage } from './introductory-business.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryBusinessPageRoutingModule {}
