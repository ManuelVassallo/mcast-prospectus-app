import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoFcCPageRoutingModule } from './gozo-fc-c-routing.module';

import { GozoFcCPage } from './gozo-fc-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoFcCPageRoutingModule
  ],
  declarations: [GozoFcCPage]
})
export class GozoFcCPageModule {}
