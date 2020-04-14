import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourselevelsPageRoutingModule } from './courselevels-routing.module';

import { CourselevelsPage } from './courselevels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourselevelsPageRoutingModule
  ],
  declarations: [CourselevelsPage]
})
export class CourselevelsPageModule {}
