import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDBsiPageRoutingModule } from './engineering-d-bsi-routing.module';

import { EngineeringDBsiPage } from './engineering-d-bsi.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDBsiPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDBsiPage]
})
export class EngineeringDBsiPageModule {}
