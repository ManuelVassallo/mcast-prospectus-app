import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesListMastersPageRoutingModule } from './courses-list-masters-routing.module';

import { CoursesListMastersPage } from './courses-list-masters.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesListMastersPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CoursesListMastersPage]
})
export class CoursesListMastersPageModule {}
