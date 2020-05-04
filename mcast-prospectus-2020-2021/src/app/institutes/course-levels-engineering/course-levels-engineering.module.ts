import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsEngineeringPageRoutingModule } from './course-levels-engineering-routing.module';

import { CourseLevelsEngineeringPage } from './course-levels-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsEngineeringPage]
})
export class CourseLevelsEngineeringPageModule {}
