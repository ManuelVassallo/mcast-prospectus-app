import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaBePageRoutingModule } from './engineering-ba-be-routing.module';

import { EngineeringBaBePage } from './engineering-ba-be.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaBePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaBePage]
})
export class EngineeringBaBePageModule {}
