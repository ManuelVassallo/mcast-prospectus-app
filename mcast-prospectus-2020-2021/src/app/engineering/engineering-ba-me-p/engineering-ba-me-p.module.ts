import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaMePPageRoutingModule } from './engineering-ba-me-p-routing.module';

import { EngineeringBaMePPage } from './engineering-ba-me-p.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaMePPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaMePPage]
})
export class EngineeringBaMePPageModule {}
