import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaPaPageRoutingModule } from './ica-ba-pa-routing.module';

import { IcaBaPaPage } from './ica-ba-pa.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaPaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaPaPage]
})
export class IcaBaPaPageModule {}
