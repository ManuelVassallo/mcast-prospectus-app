import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdMPageRoutingModule } from './engineering-ad-m-routing.module';

import { EngineeringAdMPage } from './engineering-ad-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdMPage]
})
export class EngineeringAdMPageModule {}
