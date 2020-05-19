import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaQsPageRoutingModule } from './engineering-ba-qs-routing.module';

import { EngineeringBaQsPage } from './engineering-ba-qs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaQsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaQsPage]
})
export class EngineeringBaQsPageModule {}
