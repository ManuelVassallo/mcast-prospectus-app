import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAsPage } from './ad-as.page';

const routes: Routes = [
  {
    path: '',
    component: AdAsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAsPageRoutingModule {}
