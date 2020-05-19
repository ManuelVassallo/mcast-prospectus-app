import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdAssPageRoutingModule } from './ad-ass-routing.module';

import { AdAssPage } from './ad-ass.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdAssPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdAssPage]
})
export class AdAssPageModule {}
