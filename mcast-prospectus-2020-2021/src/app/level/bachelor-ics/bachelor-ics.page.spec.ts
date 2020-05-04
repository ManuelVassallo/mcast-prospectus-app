import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorIcsPage } from './bachelor-ics.page';

describe('BachelorIcsPage', () => {
  let component: BachelorIcsPage;
  let fixture: ComponentFixture<BachelorIcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorIcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorIcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
