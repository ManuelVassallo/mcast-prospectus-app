import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsDBsPageRoutingModule } from './ics-d-bs-routing.module';

import { IcsDBsPage } from './ics-d-bs.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsDBsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsDBsPage]
})
export class IcsDBsPageModule {}
