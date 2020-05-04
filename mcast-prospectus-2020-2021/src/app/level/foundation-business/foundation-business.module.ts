import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationBusinessPageRoutingModule } from './foundation-business-routing.module';

import { FoundationBusinessPage } from './foundation-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationBusinessPageRoutingModule
  ],
  declarations: [FoundationBusinessPage]
})
export class FoundationBusinessPageModule {}
