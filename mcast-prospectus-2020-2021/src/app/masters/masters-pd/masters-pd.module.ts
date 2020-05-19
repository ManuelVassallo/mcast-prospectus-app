import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersPdPageRoutingModule } from './masters-pd-routing.module';

import { MastersPdPage } from './masters-pd.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersPdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersPdPage]
})
export class MastersPdPageModule {}
