import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryBusinessPageRoutingModule } from './introductory-business-routing.module';

import { IntroductoryBusinessPage } from './introductory-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryBusinessPageRoutingModule
  ],
  declarations: [IntroductoryBusinessPage]
})
export class IntroductoryBusinessPageModule {}
