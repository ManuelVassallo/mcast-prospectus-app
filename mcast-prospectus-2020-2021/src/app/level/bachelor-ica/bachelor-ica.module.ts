import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorIcaPageRoutingModule } from './bachelor-ica-routing.module';

import { BachelorIcaPage } from './bachelor-ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorIcaPageRoutingModule
  ],
  declarations: [BachelorIcaPage]
})
export class BachelorIcaPageModule {}
