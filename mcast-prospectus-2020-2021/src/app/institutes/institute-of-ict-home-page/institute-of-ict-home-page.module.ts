import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteOfICTHomePagePageRoutingModule } from './institute-of-ict-home-page-routing.module';

import { InstituteOfICTHomePagePage } from './institute-of-ict-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteOfICTHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InstituteOfICTHomePagePage]
})
export class InstituteOfICTHomePagePageModule {}
