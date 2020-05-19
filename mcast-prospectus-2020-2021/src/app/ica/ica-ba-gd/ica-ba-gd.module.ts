import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaGdPageRoutingModule } from './ica-ba-gd-routing.module';

import { IcaBaGdPage } from './ica-ba-gd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaGdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaGdPage]
})
export class IcaBaGdPageModule {}
