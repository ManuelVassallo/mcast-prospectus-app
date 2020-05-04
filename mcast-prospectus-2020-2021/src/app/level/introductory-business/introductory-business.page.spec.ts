import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductoryBusinessPage } from './introductory-business.page';

describe('IntroductoryBusinessPage', () => {
  let component: IntroductoryBusinessPage;
  let fixture: ComponentFixture<IntroductoryBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductoryBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
