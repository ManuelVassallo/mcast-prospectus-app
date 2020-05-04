import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICAPageRoutingModule } from './course-levels-ica-routing.module';

import { CourseLevelsICAPage } from './course-levels-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICAPageRoutingModule
  ],
  declarations: [CourseLevelsICAPage]
})
export class CourseLevelsICAPageModule {}
