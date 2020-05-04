import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryIasPageRoutingModule } from './introductory-ias-routing.module';

import { IntroductoryIasPage } from './introductory-ias.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryIasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IntroductoryIasPage]
})
export class IntroductoryIasPageModule {}
