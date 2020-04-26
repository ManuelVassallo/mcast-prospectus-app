import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursepageinfoPageRoutingModule } from './coursepageinfo-routing.module';

import { CoursepageinfoPage } from './coursepageinfo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursepageinfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CoursepageinfoPage]
})
export class CoursepageinfoPageModule {}
