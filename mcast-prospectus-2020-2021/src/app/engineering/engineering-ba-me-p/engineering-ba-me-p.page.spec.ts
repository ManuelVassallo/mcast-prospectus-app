import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringBaMePPage } from './engineering-ba-me-p.page';

describe('EngineeringBaMePPage', () => {
  let component: EngineeringBaMePPage;
  let fixture: ComponentFixture<EngineeringBaMePPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringBaMePPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringBaMePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
