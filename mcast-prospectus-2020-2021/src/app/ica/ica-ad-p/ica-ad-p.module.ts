import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaAdPPageRoutingModule } from './ica-ad-p-routing.module';

import { IcaAdPPage } from './ica-ad-p.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaAdPPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaAdPPage]
})
export class IcaAdPPageModule {}
