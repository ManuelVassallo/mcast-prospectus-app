import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteInfoIcsPage } from './institute-info-ics.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteInfoIcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteInfoIcsPageRoutingModule {}
