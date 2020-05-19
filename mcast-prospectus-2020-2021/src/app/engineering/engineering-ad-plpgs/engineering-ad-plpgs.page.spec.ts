import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringAdPlpgsPage } from './engineering-ad-plpgs.page';

describe('EngineeringAdPlpgsPage', () => {
  let component: EngineeringAdPlpgsPage;
  let fixture: ComponentFixture<EngineeringAdPlpgsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringAdPlpgsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringAdPlpgsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
