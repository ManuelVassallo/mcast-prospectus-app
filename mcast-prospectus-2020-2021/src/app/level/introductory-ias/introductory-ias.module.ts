import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIasPageRoutingModule } from './introductory-ias-routing.module';

import { IntroductoryIasPage } from './introductory-ias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIasPageRoutingModule
  ],
  declarations: [IntroductoryIasPage]
})
export class IntroductoryIasPageModule {}
