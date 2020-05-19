import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcHorticultureAndAnimalCarePageRoutingModule } from './fc-horticulture-and-animal-care-routing.module';

import { FcHorticultureAndAnimalCarePage } from './fc-horticulture-and-animal-care.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcHorticultureAndAnimalCarePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcHorticultureAndAnimalCarePage]
})
export class FcHorticultureAndAnimalCarePageModule {}
