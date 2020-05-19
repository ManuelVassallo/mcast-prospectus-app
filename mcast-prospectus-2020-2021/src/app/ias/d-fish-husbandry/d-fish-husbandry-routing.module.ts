import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DFishHusbandryPage } from './d-fish-husbandry.page';

const routes: Routes = [
  {
    path: '',
    component: DFishHusbandryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DFishHusbandryPageRoutingModule {}
