import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringIcCePageRoutingModule } from './engineering-ic-ce-routing.module';

import { EngineeringIcCePage } from './engineering-ic-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringIcCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringIcCePage]
})
export class EngineeringIcCePageModule {}
