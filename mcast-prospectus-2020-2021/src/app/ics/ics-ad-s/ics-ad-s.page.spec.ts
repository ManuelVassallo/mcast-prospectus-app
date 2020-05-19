import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsAdSPage } from './ics-ad-s.page';

describe('IcsAdSPage', () => {
  let component: IcsAdSPage;
  let fixture: ComponentFixture<IcsAdSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsAdSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsAdSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
