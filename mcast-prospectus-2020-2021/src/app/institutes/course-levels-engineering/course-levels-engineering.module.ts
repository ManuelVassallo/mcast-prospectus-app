import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsEngineeringPageRoutingModule } from './course-levels-engineering-routing.module';

import { CourseLevelsEngineeringPage } from './course-levels-engineering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsEngineeringPageRoutingModule
  ],
  declarations: [CourseLevelsEngineeringPage]
})
export class CourseLevelsEngineeringPageModule {}
