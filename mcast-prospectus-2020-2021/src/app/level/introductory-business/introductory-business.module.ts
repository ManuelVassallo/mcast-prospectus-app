import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryBusinessPageRoutingModule } from './introductory-business-routing.module';

import { IntroductoryBusinessPage } from './introductory-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IntroductoryBusinessPage]
})
export class IntroductoryBusinessPageModule {}
