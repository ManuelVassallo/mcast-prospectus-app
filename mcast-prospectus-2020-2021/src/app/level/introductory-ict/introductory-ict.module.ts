import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIctPageRoutingModule } from './introductory-ict-routing.module';

import { IntroductoryIctPage } from './introductory-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIctPageRoutingModule
  ],
  declarations: [IntroductoryIctPage]
})
export class IntroductoryIctPageModule {}
