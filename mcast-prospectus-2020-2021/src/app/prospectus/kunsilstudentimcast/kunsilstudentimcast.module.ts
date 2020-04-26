import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KunsilstudentimcastPageRoutingModule } from './kunsilstudentimcast-routing.module';

import { KunsilstudentimcastPage } from './kunsilstudentimcast.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KunsilstudentimcastPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [KunsilstudentimcastPage]
})
export class KunsilstudentimcastPageModule {}
