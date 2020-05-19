import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcAnimalHusbandryAndHorticulturalSkillsPageRoutingModule } from './ic-animal-husbandry-and-horticultural-skills-routing.module';

import { IcAnimalHusbandryAndHorticulturalSkillsPage } from './ic-animal-husbandry-and-horticultural-skills.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcAnimalHusbandryAndHorticulturalSkillsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcAnimalHusbandryAndHorticulturalSkillsPage]
})
export class IcAnimalHusbandryAndHorticulturalSkillsPageModule {}
