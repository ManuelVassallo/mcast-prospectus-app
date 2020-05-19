import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaFPageRoutingModule } from './ica-ba-f-routing.module';

import { IcaBaFPage } from './ica-ba-f.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaFPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaFPage]
})
export class IcaBaFPageModule {}
