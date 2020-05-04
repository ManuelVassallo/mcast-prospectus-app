import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLevelsICAPage } from './course-levels-ica.page';

describe('CourseLevelsICAPage', () => {
  let component: CourseLevelsICAPage;
  let fixture: ComponentFixture<CourseLevelsICAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelsICAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLevelsICAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
