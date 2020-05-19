import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringBaEePage } from './engineering-ba-ee.page';

describe('EngineeringBaEePage', () => {
  let component: EngineeringBaEePage;
  let fixture: ComponentFixture<EngineeringBaEePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringBaEePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringBaEePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
