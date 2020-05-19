import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAnimalCarePage } from './d-animal-care.page';

const routes: Routes = [
  {
    path: '',
    component: DAnimalCarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAnimalCarePageRoutingModule {}
