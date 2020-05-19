import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsDHScPage } from './ics-d-h-sc.page';

describe('IcsDHScPage', () => {
  let component: IcsDHScPage;
  let fixture: ComponentFixture<IcsDHScPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsDHScPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsDHScPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
