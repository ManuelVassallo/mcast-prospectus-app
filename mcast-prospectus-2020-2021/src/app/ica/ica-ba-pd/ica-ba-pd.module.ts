import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaPdPageRoutingModule } from './ica-ba-pd-routing.module';

import { IcaBaPdPage } from './ica-ba-pd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaPdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaPdPage]
})
export class IcaBaPdPageModule {}
