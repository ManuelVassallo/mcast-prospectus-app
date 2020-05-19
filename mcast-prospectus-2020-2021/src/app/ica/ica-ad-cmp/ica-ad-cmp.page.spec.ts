import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcaAdCmpPage } from './ica-ad-cmp.page';

describe('IcaAdCmpPage', () => {
  let component: IcaAdCmpPage;
  let fixture: ComponentFixture<IcaAdCmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcaAdCmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcaAdCmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
