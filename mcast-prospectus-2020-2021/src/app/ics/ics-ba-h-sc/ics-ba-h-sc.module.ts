import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsBaHScPageRoutingModule } from './ics-ba-h-sc-routing.module';

import { IcsBaHScPage } from './ics-ba-h-sc.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsBaHScPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsBaHScPage]
})
export class IcsBaHScPageModule {}
