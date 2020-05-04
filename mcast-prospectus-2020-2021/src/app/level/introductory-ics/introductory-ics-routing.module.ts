import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryIcsPage } from './introductory-ics.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryIcsPageRoutingModule {}
