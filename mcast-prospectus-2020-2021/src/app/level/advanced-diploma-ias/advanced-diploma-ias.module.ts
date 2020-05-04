import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIasPageRoutingModule } from './advanced-diploma-ias-routing.module';

import { AdvancedDiplomaIasPage } from './advanced-diploma-ias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIasPageRoutingModule
  ],
  declarations: [AdvancedDiplomaIasPage]
})
export class AdvancedDiplomaIasPageModule {}
