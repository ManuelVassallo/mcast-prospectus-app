import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaIcsPageRoutingModule } from './advanced-diploma-ics-routing.module';

import { AdvancedDiplomaIcsPage } from './advanced-diploma-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedDiplomaIcsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdvancedDiplomaIcsPage]
})
export class AdvancedDiplomaIcsPageModule {}
