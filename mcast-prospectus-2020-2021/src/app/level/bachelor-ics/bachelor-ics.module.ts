import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIcsPageRoutingModule } from './bachelor-ics-routing.module';

import { BachelorIcsPage } from './bachelor-ics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIcsPageRoutingModule
  ],
  declarations: [BachelorIcsPage]
})
export class BachelorIcsPageModule {}
