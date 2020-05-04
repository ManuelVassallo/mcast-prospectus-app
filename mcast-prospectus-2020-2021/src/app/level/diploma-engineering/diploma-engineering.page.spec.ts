import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomaEngineeringPage } from './diploma-engineering.page';

describe('DiplomaEngineeringPage', () => {
  let component: DiplomaEngineeringPage;
  let fixture: ComponentFixture<DiplomaEngineeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaEngineeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomaEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
