import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorEngineeringPage } from './bachelor-engineering.page';

describe('BachelorEngineeringPage', () => {
  let component: BachelorEngineeringPage;
  let fixture: ComponentFixture<BachelorEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
