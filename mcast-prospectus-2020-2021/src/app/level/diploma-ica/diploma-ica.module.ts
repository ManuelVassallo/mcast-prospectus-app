import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaIcaPageRoutingModule } from './diploma-ica-routing.module';

import { DiplomaIcaPage } from './diploma-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaIcaPageRoutingModule
  ],
  declarations: [DiplomaIcaPage]
})
export class DiplomaIcaPageModule {}
