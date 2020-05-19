import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringFcEPageRoutingModule } from './engineering-fc-e-routing.module';

import { EngineeringFcEPage } from './engineering-fc-e.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringFcEPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringFcEPage]
})
export class EngineeringFcEPageModule {}
