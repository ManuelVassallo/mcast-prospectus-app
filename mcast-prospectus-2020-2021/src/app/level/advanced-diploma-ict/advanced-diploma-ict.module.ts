import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIctPageRoutingModule } from './advanced-diploma-ict-routing.module';

import { AdvancedDiplomaIctPage } from './advanced-diploma-ict.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIctPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaIctPage]
})
export class AdvancedDiplomaIctPageModule {}
