import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdFmPageRoutingModule } from './ad-fm-routing.module';

import { AdFmPage } from './ad-fm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdFmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdFmPage]
})
export class AdFmPageModule {}
