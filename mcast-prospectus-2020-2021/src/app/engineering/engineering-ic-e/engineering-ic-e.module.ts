import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringIcEPageRoutingModule } from './engineering-ic-e-routing.module';

import { EngineeringIcEPage } from './engineering-ic-e.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringIcEPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringIcEPage]
})
export class EngineeringIcEPageModule {}
