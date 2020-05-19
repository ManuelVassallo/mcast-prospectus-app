import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaHdEyPageRoutingModule } from './ica-hd-ey-routing.module';

import { IcaHdEyPage } from './ica-hd-ey.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaHdEyPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaHdEyPage]
})
export class IcaHdEyPageModule {}
