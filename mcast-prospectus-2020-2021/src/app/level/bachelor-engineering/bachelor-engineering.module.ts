import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorEngineeringPageRoutingModule } from './bachelor-engineering-routing.module';

import { BachelorEngineeringPage } from './bachelor-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorEngineeringPage]
})
export class BachelorEngineeringPageModule {}
