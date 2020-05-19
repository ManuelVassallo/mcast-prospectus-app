import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsEdSEPPageRoutingModule } from './ics-ed-s-e-p-routing.module';

import { IcsEdSEPPage } from './ics-ed-s-e-p.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsEdSEPPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsEdSEPPage]
})
export class IcsEdSEPPageModule {}
