import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaIcAdPageRoutingModule } from './ica-ic-ad-routing.module';

import { IcaIcAdPage } from './ica-ic-ad.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaIcAdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaIcAdPage]
})
export class IcaIcAdPageModule {}
