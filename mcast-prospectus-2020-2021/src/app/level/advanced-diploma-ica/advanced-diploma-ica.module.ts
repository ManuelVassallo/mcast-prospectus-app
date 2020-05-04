import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIcaPageRoutingModule } from './advanced-diploma-ica-routing.module';

import { AdvancedDiplomaIcaPage } from './advanced-diploma-ica.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIcaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaIcaPage]
})
export class AdvancedDiplomaIcaPageModule {}
