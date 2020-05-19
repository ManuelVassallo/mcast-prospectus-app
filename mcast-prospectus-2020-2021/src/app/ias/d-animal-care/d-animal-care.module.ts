import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAnimalCarePageRoutingModule } from './d-animal-care-routing.module';

import { DAnimalCarePage } from './d-animal-care.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAnimalCarePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DAnimalCarePage]
})
export class DAnimalCarePageModule {}
