import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIcaPageRoutingModule } from './advanced-diploma-ica-routing.module';

import { AdvancedDiplomaIcaPage } from './advanced-diploma-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIcaPageRoutingModule
  ],
  declarations: [AdvancedDiplomaIcaPage]
})
export class AdvancedDiplomaIcaPageModule {}
