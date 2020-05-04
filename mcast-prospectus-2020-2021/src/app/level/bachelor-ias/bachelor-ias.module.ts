import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIasPageRoutingModule } from './bachelor-ias-routing.module';

import { BachelorIasPage } from './bachelor-ias.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorIasPage]
})
export class BachelorIasPageModule {}
