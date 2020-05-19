import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaAmVnPageRoutingModule } from './ba-am-vn-routing.module';

import { BaAmVnPage } from './ba-am-vn.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaAmVnPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaAmVnPage]
})
export class BaAmVnPageModule {}
