import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsAdHScPage } from './ics-ad-h-sc.page';

describe('IcsAdHScPage', () => {
  let component: IcsAdHScPage;
  let fixture: ComponentFixture<IcsAdHScPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsAdHScPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsAdHScPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
