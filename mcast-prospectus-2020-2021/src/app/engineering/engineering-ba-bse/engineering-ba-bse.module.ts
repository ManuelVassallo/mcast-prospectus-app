import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaBsePageRoutingModule } from './engineering-ba-bse-routing.module';

import { EngineeringBaBsePage } from './engineering-ba-bse.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaBsePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaBsePage]
})
export class EngineeringBaBsePageModule {}
