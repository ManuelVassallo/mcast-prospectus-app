import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaDMPageRoutingModule } from './ica-d-m-routing.module';

import { IcaDMPage } from './ica-d-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaDMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaDMPage]
})
export class IcaDMPageModule {}
