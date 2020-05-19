import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaIcAdPage } from './ica-ic-ad.page';

describe('IcaIcAdPage', () => {
  let component: IcaIcAdPage;
  let fixture: ComponentFixture<IcaIcAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaIcAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaIcAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
