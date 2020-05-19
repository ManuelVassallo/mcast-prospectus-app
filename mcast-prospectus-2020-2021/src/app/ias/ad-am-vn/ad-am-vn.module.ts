import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdAmVnPageRoutingModule } from './ad-am-vn-routing.module';

import { AdAmVnPage } from './ad-am-vn.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdAmVnPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AdAmVnPage]
})
export class AdAmVnPageModule {}
