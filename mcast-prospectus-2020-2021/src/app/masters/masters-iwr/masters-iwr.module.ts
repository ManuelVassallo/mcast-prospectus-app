import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersIwrPageRoutingModule } from './masters-iwr-routing.module';

import { MastersIwrPage } from './masters-iwr.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersIwrPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersIwrPage]
})
export class MastersIwrPageModule {}
