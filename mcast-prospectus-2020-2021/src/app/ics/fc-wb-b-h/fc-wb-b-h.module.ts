import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcWbBHPageRoutingModule } from './fc-wb-b-h-routing.module';

import { FcWbBHPage } from './fc-wb-b-h.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcWbBHPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FcWbBHPage]
})
export class FcWbBHPageModule {}
