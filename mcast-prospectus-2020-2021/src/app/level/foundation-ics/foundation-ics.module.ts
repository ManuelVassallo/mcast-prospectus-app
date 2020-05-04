import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIcsPageRoutingModule } from './foundation-ics-routing.module';

import { FoundationIcsPage } from './foundation-ics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIcsPageRoutingModule
  ],
  declarations: [FoundationIcsPage]
})
export class FoundationIcsPageModule {}
