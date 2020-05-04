import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaIctPageRoutingModule } from './diploma-ict-routing.module';

import { DiplomaIctPage } from './diploma-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaIctPageRoutingModule
  ],
  declarations: [DiplomaIctPage]
})
export class DiplomaIctPageModule {}
