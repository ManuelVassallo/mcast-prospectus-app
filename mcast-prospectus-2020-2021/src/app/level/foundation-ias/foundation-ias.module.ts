import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIasPageRoutingModule } from './foundation-ias-routing.module';

import { FoundationIasPage } from './foundation-ias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIasPageRoutingModule
  ],
  declarations: [FoundationIasPage]
})
export class FoundationIasPageModule {}
