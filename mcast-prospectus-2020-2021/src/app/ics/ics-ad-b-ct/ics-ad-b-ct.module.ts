import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsAdBCtPageRoutingModule } from './ics-ad-b-ct-routing.module';

import { IcsAdBCtPage } from './ics-ad-b-ct.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsAdBCtPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsAdBCtPage]
})
export class IcsAdBCtPageModule {}
