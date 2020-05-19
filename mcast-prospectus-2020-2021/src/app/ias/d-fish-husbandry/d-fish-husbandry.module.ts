import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DFishHusbandryPageRoutingModule } from './d-fish-husbandry-routing.module';

import { DFishHusbandryPage } from './d-fish-husbandry.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DFishHusbandryPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DFishHusbandryPage]
})
export class DFishHusbandryPageModule {}
