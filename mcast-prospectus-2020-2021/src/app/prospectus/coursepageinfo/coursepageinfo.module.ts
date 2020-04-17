import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursepageinfoPageRoutingModule } from './coursepageinfo-routing.module';

import { CoursepageinfoPage } from './coursepageinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursepageinfoPageRoutingModule
  ],
  declarations: [CoursepageinfoPage]
})
export class CoursepageinfoPageModule {}
