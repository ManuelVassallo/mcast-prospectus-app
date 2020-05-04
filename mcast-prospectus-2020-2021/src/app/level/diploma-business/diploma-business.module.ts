import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaBusinessPageRoutingModule } from './diploma-business-routing.module';

import { DiplomaBusinessPage } from './diploma-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaBusinessPageRoutingModule
  ],
  declarations: [DiplomaBusinessPage]
})
export class DiplomaBusinessPageModule {}
