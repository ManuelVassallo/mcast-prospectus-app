import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoIcVsPageRoutingModule } from './gozo-ic-vs-routing.module';

import { GozoIcVsPage } from './gozo-ic-vs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoIcVsPageRoutingModule
  ],
  declarations: [GozoIcVsPage]
})
export class GozoIcVsPageModule {}
