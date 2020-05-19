import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctBaSdPageRoutingModule } from './ict-ba-sd-routing.module';

import { IctBaSdPage } from './ict-ba-sd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctBaSdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctBaSdPage]
})
export class IctBaSdPageModule {}
