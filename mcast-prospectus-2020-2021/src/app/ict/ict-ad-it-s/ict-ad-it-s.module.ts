import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IctAdItSPageRoutingModule } from './ict-ad-it-s-routing.module';

import { IctAdItSPage } from './ict-ad-it-s.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IctAdItSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IctAdItSPage]
})
export class IctAdItSPageModule {}
