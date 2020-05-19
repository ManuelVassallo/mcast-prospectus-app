import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdJfdmPageRoutingModule } from './engineering-ad-jfdm-routing.module';

import { EngineeringAdJfdmPage } from './engineering-ad-jfdm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdJfdmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdJfdmPage]
})
export class EngineeringAdJfdmPageModule {}
