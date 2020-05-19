import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdIePageRoutingModule } from './engineering-ad-ie-routing.module';

import { EngineeringAdIePage } from './engineering-ad-ie.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdIePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdIePage]
})
export class EngineeringAdIePageModule {}
