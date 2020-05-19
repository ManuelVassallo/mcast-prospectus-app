import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdMPage } from './ad-m.page';

describe('AdMPage', () => {
  let component: AdMPage;
  let fixture: ComponentFixture<AdMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
