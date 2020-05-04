import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductoryIctPage } from './introductory-ict.page';

describe('IntroductoryIctPage', () => {
  let component: IntroductoryIctPage;
  let fixture: ComponentFixture<IntroductoryIctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryIctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductoryIctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
