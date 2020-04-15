import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorporateservicesPage } from './corporateservices.page';

describe('CorporateservicesPage', () => {
  let component: CorporateservicesPage;
  let fixture: ComponentFixture<CorporateservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateservicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
