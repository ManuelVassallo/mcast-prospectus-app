import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringBaMhsPageRoutingModule } from './engineering-ba-mhs-routing.module';

import { EngineeringBaMhsPage } from './engineering-ba-mhs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringBaMhsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringBaMhsPage]
})
export class EngineeringBaMhsPageModule {}
