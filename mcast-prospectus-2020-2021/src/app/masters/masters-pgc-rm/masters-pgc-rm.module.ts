import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersPgcRmPageRoutingModule } from './masters-pgc-rm-routing.module';

import { MastersPgcRmPage } from './masters-pgc-rm.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersPgcRmPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MastersPgcRmPage]
})
export class MastersPgcRmPageModule {}
