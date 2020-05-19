import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsBaHSPageRoutingModule } from './ics-ba-h-s-routing.module';

import { IcsBaHSPage } from './ics-ba-h-s.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsBaHSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsBaHSPage]
})
export class IcsBaHSPageModule {}
