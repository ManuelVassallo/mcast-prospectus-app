import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcCPageRoutingModule } from './ic-c-routing.module';

import { IcCPage } from './ic-c.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcCPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcCPage]
})
export class IcCPageModule {}
