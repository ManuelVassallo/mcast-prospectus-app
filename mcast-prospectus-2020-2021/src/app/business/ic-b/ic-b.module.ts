import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcBPageRoutingModule } from './ic-b-routing.module';

import { IcBPage } from './ic-b.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcBPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcBPage]
})
export class IcBPageModule {}
