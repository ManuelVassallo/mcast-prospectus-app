import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsDHScPageRoutingModule } from './ics-d-h-sc-routing.module';

import { IcsDHScPage } from './ics-d-h-sc.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsDHScPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsDHScPage]
})
export class IcsDHScPageModule {}
