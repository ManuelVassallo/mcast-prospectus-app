import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsatmcastPageRoutingModule } from './eventsatmcast-routing.module';

import { EventsatmcastPage } from './eventsatmcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsatmcastPageRoutingModule
  ],
  declarations: [EventsatmcastPage]
})
export class EventsatmcastPageModule {}
