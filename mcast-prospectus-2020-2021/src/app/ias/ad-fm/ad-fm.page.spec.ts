import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdFmPage } from './ad-fm.page';

describe('AdFmPage', () => {
  let component: AdFmPage;
  let fixture: ComponentFixture<AdFmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdFmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
