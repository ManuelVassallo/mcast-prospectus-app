import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsBaSPage } from './ics-ba-s.page';

describe('IcsBaSPage', () => {
  let component: IcsBaSPage;
  let fixture: ComponentFixture<IcsBaSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsBaSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsBaSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
