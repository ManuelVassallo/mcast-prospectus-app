import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIcaPageRoutingModule } from './introductory-ica-routing.module';

import { IntroductoryIcaPage } from './introductory-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIcaPageRoutingModule
  ],
  declarations: [IntroductoryIcaPage]
})
export class IntroductoryIcaPageModule {}
