import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDWfPageRoutingModule } from './engineering-d-wf-routing.module';

import { EngineeringDWfPage } from './engineering-d-wf.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDWfPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDWfPage]
})
export class EngineeringDWfPageModule {}
