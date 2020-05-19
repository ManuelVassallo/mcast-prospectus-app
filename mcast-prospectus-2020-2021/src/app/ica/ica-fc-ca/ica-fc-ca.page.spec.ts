import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaFcCaPage } from './ica-fc-ca.page';

describe('IcaFcCaPage', () => {
  let component: IcaFcCaPage;
  let fixture: ComponentFixture<IcaFcCaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaFcCaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaFcCaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
