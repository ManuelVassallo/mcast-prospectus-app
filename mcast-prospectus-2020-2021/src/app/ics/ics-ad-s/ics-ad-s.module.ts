import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsAdSPageRoutingModule } from './ics-ad-s-routing.module';

import { IcsAdSPage } from './ics-ad-s.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsAdSPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsAdSPage]
})
export class IcsAdSPageModule {}
