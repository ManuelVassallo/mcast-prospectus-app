import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaFsmPageRoutingModule } from './ba-fsm-routing.module';

import { BaFsmPage } from './ba-fsm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaFsmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaFsmPage]
})
export class BaFsmPageModule {}
