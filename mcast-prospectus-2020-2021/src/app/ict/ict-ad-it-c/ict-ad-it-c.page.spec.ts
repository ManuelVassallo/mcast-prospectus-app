import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IctAdItCPage } from './ict-ad-it-c.page';

describe('IctAdItCPage', () => {
  let component: IctAdItCPage;
  let fixture: ComponentFixture<IctAdItCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IctAdItCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IctAdItCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
