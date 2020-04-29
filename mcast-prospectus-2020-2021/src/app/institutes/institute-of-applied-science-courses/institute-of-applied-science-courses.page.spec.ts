import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfAppliedScienceCoursesPage } from './institute-of-applied-science-courses.page';

describe('InstituteOfAppliedScienceCoursesPage', () => {
  let component: InstituteOfAppliedScienceCoursesPage;
  let fixture: ComponentFixture<InstituteOfAppliedScienceCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfAppliedScienceCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfAppliedScienceCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
