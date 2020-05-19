import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaEePageRoutingModule } from './ba-ee-routing.module';

import { BaEePage } from './ba-ee.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaEePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaEePage]
})
export class BaEePageModule {}
