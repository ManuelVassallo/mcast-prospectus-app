import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsGozoPageRoutingModule } from './course-levels-gozo-routing.module';

import { CourseLevelsGozoPage } from './course-levels-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsGozoPage]
})
export class CourseLevelsGozoPageModule {}
