import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdFtPageRoutingModule } from './ad-ft-routing.module';

import { AdFtPage } from './ad-ft.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdFtPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdFtPage]
})
export class AdFtPageModule {}
