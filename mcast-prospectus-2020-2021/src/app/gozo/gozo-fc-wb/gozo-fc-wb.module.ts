import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoFcWbPageRoutingModule } from './gozo-fc-wb-routing.module';

import { GozoFcWbPage } from './gozo-fc-wb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoFcWbPageRoutingModule
  ],
  declarations: [GozoFcWbPage]
})
export class GozoFcWbPageModule {}
