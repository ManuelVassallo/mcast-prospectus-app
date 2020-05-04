import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorBusinessPageRoutingModule } from './bachelor-business-routing.module';

import { BachelorBusinessPage } from './bachelor-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorBusinessPageRoutingModule
  ],
  declarations: [BachelorBusinessPage]
})
export class BachelorBusinessPageModule {}
