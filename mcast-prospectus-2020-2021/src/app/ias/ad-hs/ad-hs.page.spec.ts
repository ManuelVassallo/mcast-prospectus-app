import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdHsPage } from './ad-hs.page';

describe('AdHsPage', () => {
  let component: AdHsPage;
  let fixture: ComponentFixture<AdHsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdHsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
