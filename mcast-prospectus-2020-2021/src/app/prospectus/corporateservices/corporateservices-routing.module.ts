import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporateservicesPage } from './corporateservices.page';

const routes: Routes = [
  {
    path: '',
    component: CorporateservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporateservicesPageRoutingModule {}
