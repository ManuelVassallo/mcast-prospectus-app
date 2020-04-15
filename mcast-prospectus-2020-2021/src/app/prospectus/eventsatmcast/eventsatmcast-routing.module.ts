import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsatmcastPage } from './eventsatmcast.page';

const routes: Routes = [
  {
    path: '',
    component: EventsatmcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsatmcastPageRoutingModule {}
