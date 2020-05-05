import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesListMastersPage } from './courses-list-masters.page';

describe('CoursesListMastersPage', () => {
  let component: CoursesListMastersPage;
  let fixture: ComponentFixture<CoursesListMastersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListMastersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListMastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
