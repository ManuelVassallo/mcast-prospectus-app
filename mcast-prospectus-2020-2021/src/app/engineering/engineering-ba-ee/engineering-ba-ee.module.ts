import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaEePageRoutingModule } from './engineering-ba-ee-routing.module';

import { EngineeringBaEePage } from './engineering-ba-ee.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaEePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaEePage]
})
export class EngineeringBaEePageModule {}
