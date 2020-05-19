import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsDSPage } from './ics-d-s.page';

describe('IcsDSPage', () => {
  let component: IcsDSPage;
  let fixture: ComponentFixture<IcsDSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsDSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsDSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
