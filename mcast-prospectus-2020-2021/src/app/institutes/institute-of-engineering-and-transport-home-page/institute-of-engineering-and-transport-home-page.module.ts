import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfEngineeringAndTransportHomePagePageRoutingModule } from './institute-of-engineering-and-transport-home-page-routing.module';

import { InstituteOfEngineeringAndTransportHomePagePage } from './institute-of-engineering-and-transport-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfEngineeringAndTransportHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteOfEngineeringAndTransportHomePagePage]
})
export class InstituteOfEngineeringAndTransportHomePagePageModule {}
