import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdPptPageRoutingModule } from './engineering-ad-ppt-routing.module';

import { EngineeringAdPptPage } from './engineering-ad-ppt.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdPptPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdPptPage]
})
export class EngineeringAdPptPageModule {}
