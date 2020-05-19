import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsBaHScPage } from './ics-ba-h-sc.page';

describe('IcsBaHScPage', () => {
  let component: IcsBaHScPage;
  let fixture: ComponentFixture<IcsBaHScPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsBaHScPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsBaHScPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
