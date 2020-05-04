import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIcsPageRoutingModule } from './foundation-ics-routing.module';

import { FoundationIcsPage } from './foundation-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIcsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationIcsPage]
})
export class FoundationIcsPageModule {}
