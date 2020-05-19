import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDEiPageRoutingModule } from './engineering-d-ei-routing.module';

import { EngineeringDEiPage } from './engineering-d-ei.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDEiPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDEiPage]
})
export class EngineeringDEiPageModule {}
