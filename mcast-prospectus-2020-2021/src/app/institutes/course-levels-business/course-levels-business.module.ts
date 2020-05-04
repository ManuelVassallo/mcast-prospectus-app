import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsBusinessPageRoutingModule } from './course-levels-business-routing.module';

import { CourseLevelsBusinessPage } from './course-levels-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsBusinessPage]
})
export class CourseLevelsBusinessPageModule {}
