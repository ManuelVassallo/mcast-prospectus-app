import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryGozoPage } from './introductory-gozo.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryGozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryGozoPageRoutingModule {}
