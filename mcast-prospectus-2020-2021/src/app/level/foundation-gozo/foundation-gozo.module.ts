import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationGozoPageRoutingModule } from './foundation-gozo-routing.module';

import { FoundationGozoPage } from './foundation-gozo.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationGozoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationGozoPage]
})
export class FoundationGozoPageModule {}
