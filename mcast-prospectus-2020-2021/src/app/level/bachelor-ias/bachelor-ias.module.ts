import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIasPageRoutingModule } from './bachelor-ias-routing.module';

import { BachelorIasPage } from './bachelor-ias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIasPageRoutingModule
  ],
  declarations: [BachelorIasPage]
})
export class BachelorIasPageModule {}
