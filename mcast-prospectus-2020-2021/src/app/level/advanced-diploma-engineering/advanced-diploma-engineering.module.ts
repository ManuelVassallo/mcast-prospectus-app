import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaEngineeringPageRoutingModule } from './advanced-diploma-engineering-routing.module';

import { AdvancedDiplomaEngineeringPage } from './advanced-diploma-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaEngineeringPage]
})
export class AdvancedDiplomaEngineeringPageModule {}
