import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaBaPaPage } from './ica-ba-pa.page';

describe('IcaBaPaPage', () => {
  let component: IcaBaPaPage;
  let fixture: ComponentFixture<IcaBaPaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaBaPaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaBaPaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
