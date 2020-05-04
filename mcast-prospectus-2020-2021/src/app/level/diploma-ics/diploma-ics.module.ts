import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaIcsPageRoutingModule } from './diploma-ics-routing.module';

import { DiplomaIcsPage } from './diploma-ics.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaIcsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DiplomaIcsPage]
})
export class DiplomaIcsPageModule {}
