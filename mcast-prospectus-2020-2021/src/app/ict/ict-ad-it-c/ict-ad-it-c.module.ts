import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctAdItCPageRoutingModule } from './ict-ad-it-c-routing.module';

import { IctAdItCPage } from './ict-ad-it-c.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctAdItCPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctAdItCPage]
})
export class IctAdItCPageModule {}
