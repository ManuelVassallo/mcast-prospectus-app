import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaMePageRoutingModule } from './engineering-ba-me-routing.module';

import { EngineeringBaMePage } from './engineering-ba-me.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaMePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaMePage]
})
export class EngineeringBaMePageModule {}
