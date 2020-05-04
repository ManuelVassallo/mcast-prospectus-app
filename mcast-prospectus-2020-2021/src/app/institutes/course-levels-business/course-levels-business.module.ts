import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsBusinessPageRoutingModule } from './course-levels-business-routing.module';

import { CourseLevelsBusinessPage } from './course-levels-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsBusinessPageRoutingModule
  ],
  declarations: [CourseLevelsBusinessPage]
})
export class CourseLevelsBusinessPageModule {}
