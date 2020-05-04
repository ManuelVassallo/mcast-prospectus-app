import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsICAPageRoutingModule } from './course-levels-ica-routing.module';

import { CourseLevelsICAPage } from './course-levels-ica.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsICAPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsICAPage]
})
export class CourseLevelsICAPageModule {}
