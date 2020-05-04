import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryEngineeringPageRoutingModule } from './introductory-engineering-routing.module';

import { IntroductoryEngineeringPage } from './introductory-engineering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryEngineeringPageRoutingModule
  ],
  declarations: [IntroductoryEngineeringPage]
})
export class IntroductoryEngineeringPageModule {}
