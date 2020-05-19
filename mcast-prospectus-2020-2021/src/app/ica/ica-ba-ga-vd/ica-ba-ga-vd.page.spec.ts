import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaBaGaVdPage } from './ica-ba-ga-vd.page';

describe('IcaBaGaVdPage', () => {
  let component: IcaBaGaVdPage;
  let fixture: ComponentFixture<IcaBaGaVdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaBaGaVdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaBaGaVdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
