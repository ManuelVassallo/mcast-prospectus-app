import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDMePageRoutingModule } from './engineering-d-me-routing.module';

import { EngineeringDMePage } from './engineering-d-me.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDMePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDMePage]
})
export class EngineeringDMePageModule {}
