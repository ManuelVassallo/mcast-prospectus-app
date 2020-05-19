import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdLvmPageRoutingModule } from './engineering-ad-lvm-routing.module';

import { EngineeringAdLvmPage } from './engineering-ad-lvm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdLvmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdLvmPage]
})
export class EngineeringAdLvmPageModule {}
