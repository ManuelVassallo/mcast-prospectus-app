import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteInfoEngineeringPage } from './institute-info-engineering.page';

describe('InstituteInfoEngineeringPage', () => {
  let component: InstituteInfoEngineeringPage;
  let fixture: ComponentFixture<InstituteInfoEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteInfoEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteInfoEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
