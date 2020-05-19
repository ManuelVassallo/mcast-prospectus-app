import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDAmPageRoutingModule } from './engineering-d-am-routing.module';

import { EngineeringDAmPage } from './engineering-d-am.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDAmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDAmPage]
})
export class EngineeringDAmPageModule {}
