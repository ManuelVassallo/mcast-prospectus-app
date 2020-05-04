import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteInfoIcsPage } from './institute-info-ics.page';

describe('InstituteInfoIcsPage', () => {
  let component: InstituteInfoIcsPage;
  let fixture: ComponentFixture<InstituteInfoIcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteInfoIcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteInfoIcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
