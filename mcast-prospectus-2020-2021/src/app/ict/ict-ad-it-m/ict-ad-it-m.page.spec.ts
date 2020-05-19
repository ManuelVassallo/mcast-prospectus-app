import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctAdItMPage } from './ict-ad-it-m.page';

describe('IctAdItMPage', () => {
  let component: IctAdItMPage;
  let fixture: ComponentFixture<IctAdItMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctAdItMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctAdItMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
