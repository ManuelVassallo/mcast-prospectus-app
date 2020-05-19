import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdHPageRoutingModule } from './ad-h-routing.module';

import { AdHPage } from './ad-h.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdHPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdHPage]
})
export class AdHPageModule {}
