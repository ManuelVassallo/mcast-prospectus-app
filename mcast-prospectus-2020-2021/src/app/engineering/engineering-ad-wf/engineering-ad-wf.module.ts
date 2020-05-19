import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdWfPageRoutingModule } from './engineering-ad-wf-routing.module';

import { EngineeringAdWfPage } from './engineering-ad-wf.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdWfPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdWfPage]
})
export class EngineeringAdWfPageModule {}
