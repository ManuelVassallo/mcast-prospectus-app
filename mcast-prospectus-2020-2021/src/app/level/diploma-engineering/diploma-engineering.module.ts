import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaEngineeringPageRoutingModule } from './diploma-engineering-routing.module';

import { DiplomaEngineeringPage } from './diploma-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DiplomaEngineeringPage]
})
export class DiplomaEngineeringPageModule {}
