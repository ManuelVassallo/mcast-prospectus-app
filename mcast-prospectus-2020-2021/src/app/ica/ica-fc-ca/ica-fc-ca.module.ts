import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaFcCaPageRoutingModule } from './ica-fc-ca-routing.module';

import { IcaFcCaPage } from './ica-fc-ca.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaFcCaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaFcCaPage]
})
export class IcaFcCaPageModule {}
