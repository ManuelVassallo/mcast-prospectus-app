import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdPtPage } from './ad-pt.page';

describe('AdPtPage', () => {
  let component: AdPtPage;
  let fixture: ComponentFixture<AdPtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdPtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
