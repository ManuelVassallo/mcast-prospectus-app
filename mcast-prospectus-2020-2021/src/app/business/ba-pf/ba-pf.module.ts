import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaPfPageRoutingModule } from './ba-pf-routing.module';

import { BaPfPage } from './ba-pf.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaPfPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaPfPage]
})
export class BaPfPageModule {}
