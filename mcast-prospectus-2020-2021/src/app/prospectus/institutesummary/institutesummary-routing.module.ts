import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesummaryPage } from './institutesummary.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesummaryPageRoutingModule {}
