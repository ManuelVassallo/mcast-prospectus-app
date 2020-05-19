import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDArPageRoutingModule } from './engineering-d-ar-routing.module';

import { EngineeringDArPage } from './engineering-d-ar.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDArPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDArPage]
})
export class EngineeringDArPageModule {}
