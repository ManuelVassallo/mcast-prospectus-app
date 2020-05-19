import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaDPaPageRoutingModule } from './ica-d-pa-routing.module';

import { IcaDPaPage } from './ica-d-pa.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaDPaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaDPaPage]
})
export class IcaDPaPageModule {}
