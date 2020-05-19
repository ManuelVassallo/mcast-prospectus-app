import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDCsmPageRoutingModule } from './engineering-d-csm-routing.module';

import { EngineeringDCsmPage } from './engineering-d-csm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDCsmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDCsmPage]
})
export class EngineeringDCsmPageModule {}
