import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDHvaPageRoutingModule } from './engineering-d-hva-routing.module';

import { EngineeringDHvaPage } from './engineering-d-hva.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDHvaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDHvaPage]
})
export class EngineeringDHvaPageModule {}
