import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcSPageRoutingModule } from './fc-s-routing.module';

import { FcSPage } from './fc-s.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcSPage]
})
export class FcSPageModule {}
