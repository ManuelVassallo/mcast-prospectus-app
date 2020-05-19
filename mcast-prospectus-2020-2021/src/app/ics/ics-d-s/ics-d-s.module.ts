import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsDSPageRoutingModule } from './ics-d-s-routing.module';

import { IcsDSPage } from './ics-d-s.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsDSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsDSPage]
})
export class IcsDSPageModule {}
