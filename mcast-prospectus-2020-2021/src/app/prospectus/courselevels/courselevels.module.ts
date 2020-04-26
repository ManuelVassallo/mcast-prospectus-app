import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourselevelsPageRoutingModule } from './courselevels-routing.module';

import { CourselevelsPage } from './courselevels.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourselevelsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourselevelsPage]
})
export class CourselevelsPageModule {}
