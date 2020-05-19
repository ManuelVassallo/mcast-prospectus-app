import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringIcEPage } from './engineering-ic-e.page';

describe('EngineeringIcEPage', () => {
  let component: EngineeringIcEPage;
  let fixture: ComponentFixture<EngineeringIcEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringIcEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringIcEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
