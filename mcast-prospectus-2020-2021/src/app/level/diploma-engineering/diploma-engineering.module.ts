import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaEngineeringPageRoutingModule } from './diploma-engineering-routing.module';

import { DiplomaEngineeringPage } from './diploma-engineering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaEngineeringPageRoutingModule
  ],
  declarations: [DiplomaEngineeringPage]
})
export class DiplomaEngineeringPageModule {}
