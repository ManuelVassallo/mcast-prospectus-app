import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdAoPageRoutingModule } from './engineering-ad-ao-routing.module';

import { EngineeringAdAoPage } from './engineering-ad-ao.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdAoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdAoPage]
})
export class EngineeringAdAoPageModule {}
