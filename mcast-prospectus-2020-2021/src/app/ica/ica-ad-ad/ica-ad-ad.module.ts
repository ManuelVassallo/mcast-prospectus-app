import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaAdAdPageRoutingModule } from './ica-ad-ad-routing.module';

import { IcaAdAdPage } from './ica-ad-ad.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaAdAdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaAdAdPage]
})
export class IcaAdAdPageModule {}
