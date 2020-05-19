import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdRPage } from './ad-r.page';

describe('AdRPage', () => {
  let component: AdRPage;
  let fixture: ComponentFixture<AdRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
