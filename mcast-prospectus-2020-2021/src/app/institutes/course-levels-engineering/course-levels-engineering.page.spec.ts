import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLevelsEngineeringPage } from './course-levels-engineering.page';

describe('CourseLevelsEngineeringPage', () => {
  let component: CourseLevelsEngineeringPage;
  let fixture: ComponentFixture<CourseLevelsEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelsEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLevelsEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
