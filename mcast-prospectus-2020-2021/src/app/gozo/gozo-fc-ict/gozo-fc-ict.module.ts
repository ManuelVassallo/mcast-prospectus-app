import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoFcIctPageRoutingModule } from './gozo-fc-ict-routing.module';

import { GozoFcIctPage } from './gozo-fc-ict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoFcIctPageRoutingModule
  ],
  declarations: [GozoFcIctPage]
})
export class GozoFcIctPageModule {}
