import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIcsPageRoutingModule } from './bachelor-ics-routing.module';

import { BachelorIcsPage } from './bachelor-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIcsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorIcsPage]
})
export class BachelorIcsPageModule {}
