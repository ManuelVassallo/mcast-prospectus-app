import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundationEngineeringPage } from './foundation-engineering.page';

describe('FoundationEngineeringPage', () => {
  let component: FoundationEngineeringPage;
  let fixture: ComponentFixture<FoundationEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
