import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringDDoPageRoutingModule } from './engineering-d-do-routing.module';

import { EngineeringDDoPage } from './engineering-d-do.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringDDoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EngineeringDDoPage]
})
export class EngineeringDDoPageModule {}
