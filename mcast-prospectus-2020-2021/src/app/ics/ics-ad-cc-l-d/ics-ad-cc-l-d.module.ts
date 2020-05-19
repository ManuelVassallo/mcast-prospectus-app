import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsAdCcLDPageRoutingModule } from './ics-ad-cc-l-d-routing.module';

import { IcsAdCcLDPage } from './ics-ad-cc-l-d.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsAdCcLDPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsAdCcLDPage]
})
export class IcsAdCcLDPageModule {}
