import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIasPageRoutingModule } from './advanced-diploma-ias-routing.module';

import { AdvancedDiplomaIasPage } from './advanced-diploma-ias.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaIasPage]
})
export class AdvancedDiplomaIasPageModule {}
