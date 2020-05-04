import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorBusinessPageRoutingModule } from './bachelor-business-routing.module';

import { BachelorBusinessPage } from './bachelor-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BachelorBusinessPage]
})
export class BachelorBusinessPageModule {}
