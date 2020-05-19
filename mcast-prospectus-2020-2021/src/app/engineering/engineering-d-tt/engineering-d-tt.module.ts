import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDTtPageRoutingModule } from './engineering-d-tt-routing.module';

import { EngineeringDTtPage } from './engineering-d-tt.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDTtPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDTtPage]
})
export class EngineeringDTtPageModule {}
