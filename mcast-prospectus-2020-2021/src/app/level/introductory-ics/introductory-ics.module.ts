import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIcsPageRoutingModule } from './introductory-ics-routing.module';

import { IntroductoryIcsPage } from './introductory-ics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIcsPageRoutingModule
  ],
  declarations: [IntroductoryIcsPage]
})
export class IntroductoryIcsPageModule {}
