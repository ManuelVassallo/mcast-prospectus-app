import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaAdPPage } from './ica-ad-p.page';

describe('IcaAdPPage', () => {
  let component: IcaAdPPage;
  let fixture: ComponentFixture<IcaAdPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaAdPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaAdPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
