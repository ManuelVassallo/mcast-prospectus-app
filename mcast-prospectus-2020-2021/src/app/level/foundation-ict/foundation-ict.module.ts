import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIctPageRoutingModule } from './foundation-ict-routing.module';

import { FoundationIctPage } from './foundation-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIctPageRoutingModule
  ],
  declarations: [FoundationIctPage]
})
export class FoundationIctPageModule {}
