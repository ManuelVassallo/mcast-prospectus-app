import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdCePageRoutingModule } from './engineering-ad-ce-routing.module';

import { EngineeringAdCePage } from './engineering-ad-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdCePage]
})
export class EngineeringAdCePageModule {}
