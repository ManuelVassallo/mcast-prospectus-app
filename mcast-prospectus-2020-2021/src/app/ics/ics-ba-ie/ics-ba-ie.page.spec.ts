import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsBaIePage } from './ics-ba-ie.page';

describe('IcsBaIePage', () => {
  let component: IcsBaIePage;
  let fixture: ComponentFixture<IcsBaIePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsBaIePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsBaIePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
