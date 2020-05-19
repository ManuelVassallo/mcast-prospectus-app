import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringFcEPage } from './engineering-fc-e.page';

describe('EngineeringFcEPage', () => {
  let component: EngineeringFcEPage;
  let fixture: ComponentFixture<EngineeringFcEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringFcEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringFcEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
