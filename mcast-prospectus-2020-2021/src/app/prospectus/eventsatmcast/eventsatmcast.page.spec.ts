import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsatmcastPage } from './eventsatmcast.page';

describe('EventsatmcastPage', () => {
  let component: EventsatmcastPage;
  let fixture: ComponentFixture<EventsatmcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsatmcastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsatmcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
