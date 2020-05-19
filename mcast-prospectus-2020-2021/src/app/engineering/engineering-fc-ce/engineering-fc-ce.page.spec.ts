import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringFcCePage } from './engineering-fc-ce.page';

describe('EngineeringFcCePage', () => {
  let component: EngineeringFcCePage;
  let fixture: ComponentFixture<EngineeringFcCePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringFcCePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringFcCePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
