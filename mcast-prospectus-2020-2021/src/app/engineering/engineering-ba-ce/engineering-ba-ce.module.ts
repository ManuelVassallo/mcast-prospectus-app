import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaCePageRoutingModule } from './engineering-ba-ce-routing.module';

import { EngineeringBaCePage } from './engineering-ba-ce.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaCePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaCePage]
})
export class EngineeringBaCePageModule {}
