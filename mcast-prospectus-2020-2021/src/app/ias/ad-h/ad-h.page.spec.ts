import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdHPage } from './ad-h.page';

describe('AdHPage', () => {
  let component: AdHPage;
  let fixture: ComponentFixture<AdHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
