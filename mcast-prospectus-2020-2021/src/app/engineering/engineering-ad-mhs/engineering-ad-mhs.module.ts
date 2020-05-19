import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdMhsPageRoutingModule } from './engineering-ad-mhs-routing.module';

import { EngineeringAdMhsPage } from './engineering-ad-mhs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdMhsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdMhsPage]
})
export class EngineeringAdMhsPageModule {}
