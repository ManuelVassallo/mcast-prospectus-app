import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaBaFaPageRoutingModule } from './ica-ba-fa-routing.module';

import { IcaBaFaPage } from './ica-ba-fa.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaBaFaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaBaFaPage]
})
export class IcaBaFaPageModule {}
