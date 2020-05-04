import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICSPageRoutingModule } from './course-levels-ics-routing.module';

import { CourseLevelsICSPage } from './course-levels-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsICSPage]
})
export class CourseLevelsICSPageModule {}
