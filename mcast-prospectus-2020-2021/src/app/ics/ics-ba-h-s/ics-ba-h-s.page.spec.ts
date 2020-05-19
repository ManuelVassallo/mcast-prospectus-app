import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsBaHSPage } from './ics-ba-h-s.page';

describe('IcsBaHSPage', () => {
  let component: IcsBaHSPage;
  let fixture: ComponentFixture<IcsBaHSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsBaHSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsBaHSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
