import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringAdMePage } from './engineering-ad-me.page';

describe('EngineeringAdMePage', () => {
  let component: EngineeringAdMePage;
  let fixture: ComponentFixture<EngineeringAdMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringAdMePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringAdMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
