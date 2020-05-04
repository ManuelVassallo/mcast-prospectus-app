import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaBusinessPageRoutingModule } from './advanced-diploma-business-routing.module';

import { AdvancedDiplomaBusinessPage } from './advanced-diploma-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaBusinessPage]
})
export class AdvancedDiplomaBusinessPageModule {}
