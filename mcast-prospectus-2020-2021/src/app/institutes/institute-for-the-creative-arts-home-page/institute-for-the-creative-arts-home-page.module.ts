import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteForTheCreativeArtsHomePagePageRoutingModule } from './institute-for-the-creative-arts-home-page-routing.module';

import { InstituteForTheCreativeArtsHomePagePage } from './institute-for-the-creative-arts-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteForTheCreativeArtsHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteForTheCreativeArtsHomePagePage]
})
export class InstituteForTheCreativeArtsHomePagePageModule {}
