import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KunsilstudentimcastPageRoutingModule } from './kunsilstudentimcast-routing.module';

import { KunsilstudentimcastPage } from './kunsilstudentimcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KunsilstudentimcastPageRoutingModule
  ],
  declarations: [KunsilstudentimcastPage]
})
export class KunsilstudentimcastPageModule {}
