import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringFcCePageRoutingModule } from './engineering-fc-ce-routing.module';

import { EngineeringFcCePage } from './engineering-fc-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringFcCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringFcCePage]
})
export class EngineeringFcCePageModule {}
