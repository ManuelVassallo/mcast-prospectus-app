import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaHPageRoutingModule } from './ba-h-routing.module';

import { BaHPage } from './ba-h.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaHPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaHPage]
})
export class BaHPageModule {}
