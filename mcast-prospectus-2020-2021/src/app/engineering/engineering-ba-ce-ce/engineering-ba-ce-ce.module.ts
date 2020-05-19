import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaCeCePageRoutingModule } from './engineering-ba-ce-ce-routing.module';

import { EngineeringBaCeCePage } from './engineering-ba-ce-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaCeCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaCeCePage]
})
export class EngineeringBaCeCePageModule {}
