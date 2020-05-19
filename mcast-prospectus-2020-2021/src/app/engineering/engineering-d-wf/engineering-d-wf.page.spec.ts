import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineeringDWfPage } from './engineering-d-wf.page';

describe('EngineeringDWfPage', () => {
  let component: EngineeringDWfPage;
  let fixture: ComponentFixture<EngineeringDWfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringDWfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringDWfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
