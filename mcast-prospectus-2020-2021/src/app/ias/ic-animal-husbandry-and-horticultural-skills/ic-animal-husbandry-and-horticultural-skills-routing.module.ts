import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcAnimalHusbandryAndHorticulturalSkillsPage } from './ic-animal-husbandry-and-horticultural-skills.page';

const routes: Routes = [
  {
    path: '',
    component: IcAnimalHusbandryAndHorticulturalSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcAnimalHusbandryAndHorticulturalSkillsPageRoutingModule {}
