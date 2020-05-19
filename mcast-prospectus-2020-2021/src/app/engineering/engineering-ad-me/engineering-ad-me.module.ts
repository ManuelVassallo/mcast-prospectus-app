import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdMePageRoutingModule } from './engineering-ad-me-routing.module';

import { EngineeringAdMePage } from './engineering-ad-me.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdMePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdMePage]
})
export class EngineeringAdMePageModule {}
