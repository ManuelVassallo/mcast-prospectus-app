import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLevelsICSPage } from './course-levels-ics.page';

describe('CourseLevelsICSPage', () => {
  let component: CourseLevelsICSPage;
  let fixture: ComponentFixture<CourseLevelsICSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelsICSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLevelsICSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
