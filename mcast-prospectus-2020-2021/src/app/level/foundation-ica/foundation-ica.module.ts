import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIcaPageRoutingModule } from './foundation-ica-routing.module';

import { FoundationIcaPage } from './foundation-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIcaPageRoutingModule
  ],
  declarations: [FoundationIcaPage]
})
export class FoundationIcaPageModule {}
