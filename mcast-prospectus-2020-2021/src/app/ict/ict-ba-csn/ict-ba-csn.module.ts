import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctBaCsnPageRoutingModule } from './ict-ba-csn-routing.module';

import { IctBaCsnPage } from './ict-ba-csn.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctBaCsnPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctBaCsnPage]
})
export class IctBaCsnPageModule {}
