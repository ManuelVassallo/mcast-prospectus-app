import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteofappliedsciencePage } from './instituteofappliedscience.page';

describe('InstituteofappliedsciencePage', () => {
  let component: InstituteofappliedsciencePage;
  let fixture: ComponentFixture<InstituteofappliedsciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteofappliedsciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteofappliedsciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
