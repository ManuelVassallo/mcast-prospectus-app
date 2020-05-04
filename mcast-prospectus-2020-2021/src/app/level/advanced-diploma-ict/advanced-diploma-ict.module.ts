import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIctPageRoutingModule } from './advanced-diploma-ict-routing.module';

import { AdvancedDiplomaIctPage } from './advanced-diploma-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIctPageRoutingModule
  ],
  declarations: [AdvancedDiplomaIctPage]
})
export class AdvancedDiplomaIctPageModule {}
