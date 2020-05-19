import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDCePageRoutingModule } from './engineering-d-ce-routing.module';

import { EngineeringDCePage } from './engineering-d-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDCePage]
})
export class EngineeringDCePageModule {}
