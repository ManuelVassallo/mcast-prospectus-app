import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KunsilstudentimcastPage } from './kunsilstudentimcast.page';

const routes: Routes = [
  {
    path: '',
    component: KunsilstudentimcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KunsilstudentimcastPageRoutingModule {}
