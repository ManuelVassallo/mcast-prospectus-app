import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringAdOmPageRoutingModule } from './engineering-ad-om-routing.module';

import { EngineeringAdOmPage } from './engineering-ad-om.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringAdOmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringAdOmPage]
})
export class EngineeringAdOmPageModule {}
