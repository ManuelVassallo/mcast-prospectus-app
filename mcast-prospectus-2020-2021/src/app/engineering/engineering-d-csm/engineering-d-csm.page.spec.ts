import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringDCsmPage } from './engineering-d-csm.page';

describe('EngineeringDCsmPage', () => {
  let component: EngineeringDCsmPage;
  let fixture: ComponentFixture<EngineeringDCsmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringDCsmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringDCsmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
