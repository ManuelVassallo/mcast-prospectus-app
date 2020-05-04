import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductoryIcsPage } from './introductory-ics.page';

describe('IntroductoryIcsPage', () => {
  let component: IntroductoryIcsPage;
  let fixture: ComponentFixture<IntroductoryIcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryIcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductoryIcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
