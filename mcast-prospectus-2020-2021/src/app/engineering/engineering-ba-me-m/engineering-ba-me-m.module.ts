import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaMeMPageRoutingModule } from './engineering-ba-me-m-routing.module';

import { EngineeringBaMeMPage } from './engineering-ba-me-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaMeMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaMeMPage]
})
export class EngineeringBaMeMPageModule {}
