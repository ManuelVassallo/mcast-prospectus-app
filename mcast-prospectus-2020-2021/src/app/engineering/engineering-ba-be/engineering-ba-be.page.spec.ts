import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringBaBePage } from './engineering-ba-be.page';

describe('EngineeringBaBePage', () => {
  let component: EngineeringBaBePage;
  let fixture: ComponentFixture<EngineeringBaBePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringBaBePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringBaBePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
