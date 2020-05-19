import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsDHwPage } from './ics-d-hw.page';

describe('IcsDHwPage', () => {
  let component: IcsDHwPage;
  let fixture: ComponentFixture<IcsDHwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsDHwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsDHwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
