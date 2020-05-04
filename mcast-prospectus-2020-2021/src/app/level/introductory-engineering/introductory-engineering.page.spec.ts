import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductoryEngineeringPage } from './introductory-engineering.page';

describe('IntroductoryEngineeringPage', () => {
  let component: IntroductoryEngineeringPage;
  let fixture: ComponentFixture<IntroductoryEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductoryEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
