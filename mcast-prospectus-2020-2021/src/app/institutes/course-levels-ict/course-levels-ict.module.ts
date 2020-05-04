import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICTPageRoutingModule } from './course-levels-ict-routing.module';

import { CourseLevelsICTPage } from './course-levels-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICTPageRoutingModule
  ],
  declarations: [CourseLevelsICTPage]
})
export class CourseLevelsICTPageModule {}
