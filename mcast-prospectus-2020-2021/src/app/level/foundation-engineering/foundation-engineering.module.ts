import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationEngineeringPageRoutingModule } from './foundation-engineering-routing.module';

import { FoundationEngineeringPage } from './foundation-engineering.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationEngineeringPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationEngineeringPage]
})
export class FoundationEngineeringPageModule {}
