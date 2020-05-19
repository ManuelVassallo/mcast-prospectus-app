import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersMPageRoutingModule } from './masters-m-routing.module';

import { MastersMPage } from './masters-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersMPage]
})
export class MastersMPageModule {}
