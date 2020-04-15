import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutesummaryPageRoutingModule } from './institutesummary-routing.module';

import { InstitutesummaryPage } from './institutesummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutesummaryPageRoutingModule
  ],
  declarations: [InstitutesummaryPage]
})
export class InstitutesummaryPageModule {}
