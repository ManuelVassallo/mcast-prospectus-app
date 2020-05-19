import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctIcIctPageRoutingModule } from './ict-ic-ict-routing.module';

import { IctIcIctPage } from './ict-ic-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctIcIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctIcIctPage]
})
export class IctIcIctPageModule {}
