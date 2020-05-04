import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICTPageRoutingModule } from './course-levels-ict-routing.module';

import { CourseLevelsICTPage } from './course-levels-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICTPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsICTPage]
})
export class CourseLevelsICTPageModule {}
