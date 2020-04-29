import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfBusinessHomePagePageRoutingModule } from './institute-of-business-home-page-routing.module';

import { InstituteOfBusinessHomePagePage } from './institute-of-business-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfBusinessHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteOfBusinessHomePagePage]
})
export class InstituteOfBusinessHomePagePageModule {}
