import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationEngineeringPageRoutingModule } from './foundation-engineering-routing.module';

import { FoundationEngineeringPage } from './foundation-engineering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationEngineeringPageRoutingModule
  ],
  declarations: [FoundationEngineeringPage]
})
export class FoundationEngineeringPageModule {}
