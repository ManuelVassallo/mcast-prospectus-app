import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorGozoPageRoutingModule } from './bachelor-gozo-routing.module';

import { BachelorGozoPage } from './bachelor-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorGozoPage]
})
export class BachelorGozoPageModule {}
