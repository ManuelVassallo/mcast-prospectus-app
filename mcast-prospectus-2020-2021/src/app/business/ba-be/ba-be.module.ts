import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaBePageRoutingModule } from './ba-be-routing.module';

import { BaBePage } from './ba-be.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaBePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaBePage]
})
export class BaBePageModule {}
