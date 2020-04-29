import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfAppliedScienceCoursesPageRoutingModule } from './institute-of-applied-science-courses-routing.module';

import { InstituteOfAppliedScienceCoursesPage } from './institute-of-applied-science-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfAppliedScienceCoursesPageRoutingModule
  ],
  declarations: [InstituteOfAppliedScienceCoursesPage]
})
export class InstituteOfAppliedScienceCoursesPageModule {}
