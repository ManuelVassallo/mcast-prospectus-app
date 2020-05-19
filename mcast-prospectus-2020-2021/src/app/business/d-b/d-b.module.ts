import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DBPageRoutingModule } from './d-b-routing.module';

import { DBPage } from './d-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DBPageRoutingModule
  ],
  declarations: [DBPage]
})
export class DBPageModule {}
