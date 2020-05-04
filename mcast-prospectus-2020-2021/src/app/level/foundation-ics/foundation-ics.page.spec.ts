import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationIcsPage } from './foundation-ics.page';

describe('FoundationIcsPage', () => {
  let component: FoundationIcsPage;
  let fixture: ComponentFixture<FoundationIcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationIcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationIcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
