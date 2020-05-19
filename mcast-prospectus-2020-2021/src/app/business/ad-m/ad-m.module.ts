import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdMPageRoutingModule } from './ad-m-routing.module';

import { AdMPage } from './ad-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdMPage]
})
export class AdMPageModule {}
