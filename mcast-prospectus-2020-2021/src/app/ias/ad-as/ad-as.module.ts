import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdAsPageRoutingModule } from './ad-as-routing.module';

import { AdAsPage } from './ad-as.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdAsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdAsPage]
})
export class AdAsPageModule {}
