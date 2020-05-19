import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringBaEcePage } from './engineering-ba-ece.page';

describe('EngineeringBaEcePage', () => {
  let component: EngineeringBaEcePage;
  let fixture: ComponentFixture<EngineeringBaEcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringBaEcePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringBaEcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
