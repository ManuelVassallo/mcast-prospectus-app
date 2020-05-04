import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductoryIcaPage } from './introductory-ica.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductoryIcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductoryIcaPageRoutingModule {}
