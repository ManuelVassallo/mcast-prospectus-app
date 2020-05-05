import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersHomePagePageRoutingModule } from './masters-home-page-routing.module';

import { MastersHomePagePage } from './masters-home-page.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersHomePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersHomePagePage]
})
export class MastersHomePagePageModule {}
