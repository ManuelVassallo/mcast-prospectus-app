import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIctPageRoutingModule } from './bachelor-ict-routing.module';

import { BachelorIctPage } from './bachelor-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorIctPage]
})
export class BachelorIctPageModule {}
