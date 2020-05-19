import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcsDBsPage } from './ics-d-bs.page';

const routes: Routes = [
  {
    path: '',
    component: IcsDBsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcsDBsPageRoutingModule {}
