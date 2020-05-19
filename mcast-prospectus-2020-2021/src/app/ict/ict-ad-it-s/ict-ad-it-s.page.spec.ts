import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctAdItSPage } from './ict-ad-it-s.page';

describe('IctAdItSPage', () => {
  let component: IctAdItSPage;
  let fixture: ComponentFixture<IctAdItSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctAdItSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctAdItSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
