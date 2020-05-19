import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctDIctPageRoutingModule } from './ict-d-ict-routing.module';

import { IctDIctPage } from './ict-d-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctDIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctDIctPage]
})
export class IctDIctPageModule {}
