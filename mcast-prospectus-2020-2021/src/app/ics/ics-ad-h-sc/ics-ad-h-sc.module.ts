import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsAdHScPageRoutingModule } from './ics-ad-h-sc-routing.module';

import { IcsAdHScPage } from './ics-ad-h-sc.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsAdHScPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IcsAdHScPage]
})
export class IcsAdHScPageModule {}
