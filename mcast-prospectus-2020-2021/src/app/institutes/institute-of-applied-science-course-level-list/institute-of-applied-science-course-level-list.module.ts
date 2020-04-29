import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfAppliedScienceCourseLevelListPageRoutingModule } from './institute-of-applied-science-course-level-list-routing.module';

import { InstituteOfAppliedScienceCourseLevelListPage } from './institute-of-applied-science-course-level-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfAppliedScienceCourseLevelListPageRoutingModule
  ],
  declarations: [InstituteOfAppliedScienceCourseLevelListPage]
})
export class InstituteOfAppliedScienceCourseLevelListPageModule {}
