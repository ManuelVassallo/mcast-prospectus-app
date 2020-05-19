import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersAsbPageRoutingModule } from './masters-asb-routing.module';

import { MastersAsbPage } from './masters-asb.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersAsbPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersAsbPage]
})
export class MastersAsbPageModule {}
