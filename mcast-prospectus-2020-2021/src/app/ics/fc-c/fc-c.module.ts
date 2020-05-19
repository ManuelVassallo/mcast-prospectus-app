import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcCPageRoutingModule } from './fc-c-routing.module';

import { FcCPage } from './fc-c.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcCPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcCPage]
})
export class FcCPageModule {}
