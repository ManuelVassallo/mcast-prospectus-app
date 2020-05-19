import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDAsrPageRoutingModule } from './engineering-d-asr-routing.module';

import { EngineeringDAsrPage } from './engineering-d-asr.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDAsrPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDAsrPage]
})
export class EngineeringDAsrPageModule {}
