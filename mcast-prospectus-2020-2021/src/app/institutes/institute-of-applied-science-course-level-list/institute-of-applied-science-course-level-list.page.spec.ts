import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfAppliedScienceCourseLevelListPage } from './institute-of-applied-science-course-level-list.page';

describe('InstituteOfAppliedScienceCourseLevelListPage', () => {
  let component: InstituteOfAppliedScienceCourseLevelListPage;
  let fixture: ComponentFixture<InstituteOfAppliedScienceCourseLevelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfAppliedScienceCourseLevelListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfAppliedScienceCourseLevelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
