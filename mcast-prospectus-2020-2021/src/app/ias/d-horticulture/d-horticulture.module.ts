import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DHorticulturePageRoutingModule } from './d-horticulture-routing.module';

import { DHorticulturePage } from './d-horticulture.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DHorticulturePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DHorticulturePage]
})
export class DHorticulturePageModule {}
