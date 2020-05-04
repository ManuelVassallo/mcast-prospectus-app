import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaIasPageRoutingModule } from './diploma-ias-routing.module';

import { DiplomaIasPage } from './diploma-ias.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaIasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DiplomaIasPage]
})
export class DiplomaIasPageModule {}
