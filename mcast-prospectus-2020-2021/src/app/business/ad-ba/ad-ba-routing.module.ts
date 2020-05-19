import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdBaPage } from './ad-ba.page';

const routes: Routes = [
  {
    path: '',
    component: AdBaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdBaPageRoutingModule {}
