import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaBePage } from './ba-be.page';

const routes: Routes = [
  {
    path: '',
    component: BaBePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaBePageRoutingModule {}
