import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsAdHScPage } from './ics-ad-h-sc.page';

const routes: Routes = [
  {
    path: '',
    component: IcsAdHScPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsAdHScPageRoutingModule {}
