import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteofappliedsciencePage } from './instituteofappliedscience.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteofappliedsciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteofappliedsciencePageRoutingModule {}
