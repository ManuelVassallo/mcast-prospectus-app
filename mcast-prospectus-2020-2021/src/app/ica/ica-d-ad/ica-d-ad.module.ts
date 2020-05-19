import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaDAdPageRoutingModule } from './ica-d-ad-routing.module';

import { IcaDAdPage } from './ica-d-ad.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaDAdPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcaDAdPage]
})
export class IcaDAdPageModule {}
