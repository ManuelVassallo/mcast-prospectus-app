import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancedDiplomaEngineeringPage } from './advanced-diploma-engineering.page';

describe('AdvancedDiplomaEngineeringPage', () => {
  let component: AdvancedDiplomaEngineeringPage;
  let fixture: ComponentFixture<AdvancedDiplomaEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDiplomaEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedDiplomaEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
