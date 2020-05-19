import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaGaVdPageRoutingModule } from './ica-ba-ga-vd-routing.module';

import { IcaBaGaVdPage } from './ica-ba-ga-vd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaGaVdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaGaVdPage]
})
export class IcaBaGaVdPageModule {}
