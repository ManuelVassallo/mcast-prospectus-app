import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcsAdCcLDPage } from './ics-ad-cc-l-d.page';

describe('IcsAdCcLDPage', () => {
  let component: IcsAdCcLDPage;
  let fixture: ComponentFixture<IcsAdCcLDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsAdCcLDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcsAdCcLDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
