import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaFmPageRoutingModule } from './ba-fm-routing.module';

import { BaFmPage } from './ba-fm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaFmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaFmPage]
})
export class BaFmPageModule {}
