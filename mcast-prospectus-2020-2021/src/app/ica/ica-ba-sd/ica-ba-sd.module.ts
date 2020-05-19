import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaSdPageRoutingModule } from './ica-ba-sd-routing.module';

import { IcaBaSdPage } from './ica-ba-sd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaSdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaSdPage]
})
export class IcaBaSdPageModule {}
