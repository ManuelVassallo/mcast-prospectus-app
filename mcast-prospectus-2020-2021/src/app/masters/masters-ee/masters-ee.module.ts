import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersEePageRoutingModule } from './masters-ee-routing.module';

import { MastersEePage } from './masters-ee.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersEePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersEePage]
})
export class MastersEePageModule {}
