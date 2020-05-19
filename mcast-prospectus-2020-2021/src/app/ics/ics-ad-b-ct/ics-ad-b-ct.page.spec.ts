import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsAdBCtPage } from './ics-ad-b-ct.page';

describe('IcsAdBCtPage', () => {
  let component: IcsAdBCtPage;
  let fixture: ComponentFixture<IcsAdBCtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsAdBCtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsAdBCtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
