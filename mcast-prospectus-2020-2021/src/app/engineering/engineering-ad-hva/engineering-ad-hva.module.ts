import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdHvaPageRoutingModule } from './engineering-ad-hva-routing.module';

import { EngineeringAdHvaPage } from './engineering-ad-hva.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdHvaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdHvaPage]
})
export class EngineeringAdHvaPageModule {}
