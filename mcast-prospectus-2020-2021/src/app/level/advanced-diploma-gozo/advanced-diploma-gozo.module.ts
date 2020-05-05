import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaGozoPageRoutingModule } from './advanced-diploma-gozo-routing.module';

import { AdvancedDiplomaGozoPage } from './advanced-diploma-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaGozoPage]
})
export class AdvancedDiplomaGozoPageModule {}
