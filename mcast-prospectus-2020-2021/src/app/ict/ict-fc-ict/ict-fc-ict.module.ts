import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctFcIctPageRoutingModule } from './ict-fc-ict-routing.module';

import { IctFcIctPage } from './ict-fc-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctFcIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctFcIctPage]
})
export class IctFcIctPageModule {}
