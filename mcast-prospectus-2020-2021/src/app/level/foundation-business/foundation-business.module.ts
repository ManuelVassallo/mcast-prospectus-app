import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundationBusinessPageRoutingModule } from './foundation-business-routing.module';

import { FoundationBusinessPage } from './foundation-business.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundationBusinessPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FoundationBusinessPage]
})
export class FoundationBusinessPageModule {}
