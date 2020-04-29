import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteOfEngineeringAndTransportHomePagePage } from './institute-of-engineering-and-transport-home-page.page';

describe('InstituteOfEngineeringAndTransportHomePagePage', () => {
  let component: InstituteOfEngineeringAndTransportHomePagePage;
  let fixture: ComponentFixture<InstituteOfEngineeringAndTransportHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOfEngineeringAndTransportHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteOfEngineeringAndTransportHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
