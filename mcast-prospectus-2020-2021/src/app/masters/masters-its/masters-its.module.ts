import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersItsPageRoutingModule } from './masters-its-routing.module';

import { MastersItsPage } from './masters-its.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersItsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersItsPage]
})
export class MastersItsPageModule {}
