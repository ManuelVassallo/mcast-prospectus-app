import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaCmpPageRoutingModule } from './ica-ba-cmp-routing.module';

import { IcaBaCmpPage } from './ica-ba-cmp.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaCmpPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaCmpPage]
})
export class IcaBaCmpPageModule {}
