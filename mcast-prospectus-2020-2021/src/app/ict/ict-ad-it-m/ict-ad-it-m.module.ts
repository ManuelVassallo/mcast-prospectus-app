import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctAdItMPageRoutingModule } from './ict-ad-it-m-routing.module';

import { IctAdItMPage } from './ict-ad-it-m.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctAdItMPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctAdItMPage]
})
export class IctAdItMPageModule {}
