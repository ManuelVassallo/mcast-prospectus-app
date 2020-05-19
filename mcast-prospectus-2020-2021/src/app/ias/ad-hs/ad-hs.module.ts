import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdHsPageRoutingModule } from './ad-hs-routing.module';

import { AdHsPage } from './ad-hs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdHsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdHsPage]
})
export class AdHsPageModule {}
