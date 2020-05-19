import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsBaIePageRoutingModule } from './ics-ba-ie-routing.module';

import { IcsBaIePage } from './ics-ba-ie.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsBaIePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsBaIePage]
})
export class IcsBaIePageModule {}
