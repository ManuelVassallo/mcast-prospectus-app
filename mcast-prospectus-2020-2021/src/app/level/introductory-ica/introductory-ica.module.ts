import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIcaPageRoutingModule } from './introductory-ica-routing.module';

import { IntroductoryIcaPage } from './introductory-ica.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIcaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IntroductoryIcaPage]
})
export class IntroductoryIcaPageModule {}
