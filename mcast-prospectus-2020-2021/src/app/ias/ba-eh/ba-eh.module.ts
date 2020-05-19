import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaEhPageRoutingModule } from './ba-eh-routing.module';

import { BaEhPage } from './ba-eh.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaEhPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BaEhPage]
})
export class BaEhPageModule {}
