import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIctPageRoutingModule } from './foundation-ict-routing.module';

import { FoundationIctPage } from './foundation-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationIctPage]
})
export class FoundationIctPageModule {}
