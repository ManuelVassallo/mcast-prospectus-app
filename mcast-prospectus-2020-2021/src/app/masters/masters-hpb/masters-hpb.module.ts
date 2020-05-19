import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersHpbPageRoutingModule } from './masters-hpb-routing.module';

import { MastersHpbPage } from './masters-hpb.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersHpbPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersHpbPage]
})
export class MastersHpbPageModule {}
