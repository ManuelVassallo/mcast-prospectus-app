import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDJfPageRoutingModule } from './engineering-d-jf-routing.module';

import { EngineeringDJfPage } from './engineering-d-jf.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDJfPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDJfPage]
})
export class EngineeringDJfPageModule {}
