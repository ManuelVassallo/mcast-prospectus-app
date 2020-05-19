import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdFiPage } from './ad-fi.page';

describe('AdFiPage', () => {
  let component: AdFiPage;
  let fixture: ComponentFixture<AdFiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdFiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
