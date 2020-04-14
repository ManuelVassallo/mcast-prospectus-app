import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourselevelsPage } from './courselevels.page';

describe('CourselevelsPage', () => {
  let component: CourselevelsPage;
  let fixture: ComponentFixture<CourselevelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselevelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourselevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
