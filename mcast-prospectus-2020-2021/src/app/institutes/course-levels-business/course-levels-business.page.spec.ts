import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLevelsBusinessPage } from './course-levels-business.page';

describe('CourseLevelsBusinessPage', () => {
  let component: CourseLevelsBusinessPage;
  let fixture: ComponentFixture<CourseLevelsBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelsBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLevelsBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
