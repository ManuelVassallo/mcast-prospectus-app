import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursepageinfoPage } from './coursepageinfo.page';

describe('CoursepageinfoPage', () => {
  let component: CoursepageinfoPage;
  let fixture: ComponentFixture<CoursepageinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursepageinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursepageinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
