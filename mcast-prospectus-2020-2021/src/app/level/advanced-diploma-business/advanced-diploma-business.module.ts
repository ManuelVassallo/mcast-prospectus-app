import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaBusinessPageRoutingModule } from './advanced-diploma-business-routing.module';

import { AdvancedDiplomaBusinessPage } from './advanced-diploma-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaBusinessPageRoutingModule
  ],
  declarations: [AdvancedDiplomaBusinessPage]
})
export class AdvancedDiplomaBusinessPageModule {}
