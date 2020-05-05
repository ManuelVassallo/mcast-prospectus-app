import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductoryGozoPageRoutingModule } from './introductory-gozo-routing.module';

import { IntroductoryGozoPage } from './introductory-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductoryGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IntroductoryGozoPage]
})
export class IntroductoryGozoPageModule {}
