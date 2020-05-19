import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaPPageRoutingModule } from './ica-ba-p-routing.module';

import { IcaBaPPage } from './ica-ba-p.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaPPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaPPage]
})
export class IcaBaPPageModule {}
