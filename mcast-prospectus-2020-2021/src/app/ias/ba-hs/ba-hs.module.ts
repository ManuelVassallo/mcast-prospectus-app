import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaHsPageRoutingModule } from './ba-hs-routing.module';

import { BaHsPage } from './ba-hs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaHsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaHsPage]
})
export class BaHsPageModule {}
