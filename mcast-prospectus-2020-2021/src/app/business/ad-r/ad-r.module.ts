import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdRPageRoutingModule } from './ad-r-routing.module';

import { AdRPage } from './ad-r.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdRPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdRPage]
})
export class AdRPageModule {}
