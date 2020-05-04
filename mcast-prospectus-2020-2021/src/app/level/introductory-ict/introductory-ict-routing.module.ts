import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryIctPage } from './introductory-ict.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryIctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryIctPageRoutingModule {}
