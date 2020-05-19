import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaCtPageRoutingModule } from './ba-ct-routing.module';

import { BaCtPage } from './ba-ct.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaCtPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaCtPage]
})
export class BaCtPageModule {}
