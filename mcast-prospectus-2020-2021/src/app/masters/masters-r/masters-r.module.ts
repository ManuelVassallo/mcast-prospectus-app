import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersRPageRoutingModule } from './masters-r-routing.module';

import { MastersRPage } from './masters-r.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersRPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersRPage]
})
export class MastersRPageModule {}
