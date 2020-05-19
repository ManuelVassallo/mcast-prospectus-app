import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoFcEsPageRoutingModule } from './gozo-fc-es-routing.module';

import { GozoFcEsPage } from './gozo-fc-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoFcEsPageRoutingModule
  ],
  declarations: [GozoFcEsPage]
})
export class GozoFcEsPageModule {}
