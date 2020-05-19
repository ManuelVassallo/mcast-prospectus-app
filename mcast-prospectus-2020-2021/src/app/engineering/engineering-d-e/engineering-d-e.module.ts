import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDEPageRoutingModule } from './engineering-d-e-routing.module';

import { EngineeringDEPage } from './engineering-d-e.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDEPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDEPage]
})
export class EngineeringDEPageModule {}
