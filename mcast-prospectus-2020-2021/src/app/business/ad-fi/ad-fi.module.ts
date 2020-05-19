import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdFiPageRoutingModule } from './ad-fi-routing.module';

import { AdFiPage } from './ad-fi.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdFiPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdFiPage]
})
export class AdFiPageModule {}
