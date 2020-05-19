import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaAdPaPageRoutingModule } from './ica-ad-pa-routing.module';

import { IcaAdPaPage } from './ica-ad-pa.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaAdPaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaAdPaPage]
})
export class IcaAdPaPageModule {}
