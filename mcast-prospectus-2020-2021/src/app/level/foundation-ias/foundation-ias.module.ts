import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationIasPageRoutingModule } from './foundation-ias-routing.module';

import { FoundationIasPage } from './foundation-ias.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationIasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationIasPage]
})
export class FoundationIasPageModule {}
