import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryIasPage } from './introductory-ias.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryIasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryIasPageRoutingModule {}
