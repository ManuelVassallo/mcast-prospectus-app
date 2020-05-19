import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcHorticultureAndAnimalCarePage } from './fc-horticulture-and-animal-care.page';

const routes: Routes = [
  {
    path: '',
    component: FcHorticultureAndAnimalCarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcHorticultureAndAnimalCarePageRoutingModule {}
