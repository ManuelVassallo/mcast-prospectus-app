import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcBPageRoutingModule } from './fc-b-routing.module';

import { FcBPage } from './fc-b.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcBPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcBPage]
})
export class FcBPageModule {}
