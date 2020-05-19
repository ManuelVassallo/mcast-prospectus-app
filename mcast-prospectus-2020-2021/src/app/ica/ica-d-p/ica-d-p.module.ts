import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaDPPageRoutingModule } from './ica-d-p-routing.module';

import { IcaDPPage } from './ica-d-p.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaDPPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaDPPage]
})
export class IcaDPPageModule {}
