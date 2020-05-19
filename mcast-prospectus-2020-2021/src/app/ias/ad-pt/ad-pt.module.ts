import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdPtPageRoutingModule } from './ad-pt-routing.module';

import { AdPtPage } from './ad-pt.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdPtPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdPtPage]
})
export class AdPtPageModule {}
