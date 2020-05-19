import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaJPageRoutingModule } from './ica-ba-j-routing.module';

import { IcaBaJPage } from './ica-ba-j.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaJPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaJPage]
})
export class IcaBaJPageModule {}
