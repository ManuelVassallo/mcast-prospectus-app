import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaBusinessPageRoutingModule } from './diploma-business-routing.module';

import { DiplomaBusinessPage } from './diploma-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DiplomaBusinessPage]
})
export class DiplomaBusinessPageModule {}
