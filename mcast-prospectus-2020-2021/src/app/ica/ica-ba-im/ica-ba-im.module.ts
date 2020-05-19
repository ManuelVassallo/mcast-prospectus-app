import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaImPageRoutingModule } from './ica-ba-im-routing.module';

import { IcaBaImPage } from './ica-ba-im.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaImPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaImPage]
})
export class IcaBaImPageModule {}
