import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICSPageRoutingModule } from './course-levels-ics-routing.module';

import { CourseLevelsICSPage } from './course-levels-ics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICSPageRoutingModule
  ],
  declarations: [CourseLevelsICSPage]
})
export class CourseLevelsICSPageModule {}
